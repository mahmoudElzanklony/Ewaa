<?php

namespace App\Http\Controllers\Api\listings;

use App\Http\Controllers\Controller;
use App\Http\Requests\listingFormRequest;
use App\Http\traits\messages;
use App\Models\listing_photos;
use App\Models\listing_questions_answers;
use App\Models\listing_statistics;
use App\Models\listings_info;
use App\Models\User;
use App\Models\users_contact_seller;
use App\Services\listings\count_listing_statistics;
use App\Services\listings\detect_payment_client_ways;
use App\Services\listings\filter_listings;
use App\Services\listings\get_pointsprice_of_place;
use App\Services\listings\listing_details;
use App\Services\mail\send_email;
use App\Services\users\best_users_listings;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;

class ListingsControllerApi extends Controller
{
    //
    use upload_image;
    public function details(){
        if(request()->has('id')) {
            return messages::success_output('',listing_details::get_details(request('id')));
        }
    }

    public function save(listingFormRequest $request){
        $user = User::query()->find(auth()->id());
        $data_validated = $request->validated();
        $data_validated['user_id'] = auth()->id();
        if(!(in_array(request('client_payment_status') , detect_payment_client_ways::get_client_payment($data_validated['rent_or_sale'])))){
            return messages::error_output(['client_payment_status isnt correct value']);
        }
        if(!(request()->has('id'))) {
            // create theses values of these columns
            $data_validated['client_payment_status'] = request('client_payment_status');
            $data_validated['payment_status'] = 0;
            $data_validated['coordinates'] = "00000,000000";
            if ($user->auto_publish == 1) {
                $data_validated['type'] = "live";
            } else {
                $data_validated['type'] = "pending";
            }
        }
       // create or update listing
        $listing_obj = listings_info::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id') : null
        ],$data_validated);

        $questions = request('questions');
        // update or create values for questions
        foreach ($questions as $question) {
            if ($question['answer'] != null) {
                listing_questions_answers::query()->updateOrCreate([
                    'listing_id' => $listing_obj->id,
                    'question_id' => $question['question_id']
                ], [
                    'answer' => $question['answer'],
                    'type' => $question['type'],
                ]);
            }
        }
        // insert images
        if(request()->hasFile('photos')) {
            foreach (request()->file('photos') as $file) {
                $image = $this->upload($file, 'listings');
                listing_photos::query()->create([
                    'listing_id' => $listing_obj->id,
                    'image' => $image
                ]);
            }
        }
        // if i dont has id
        if(!(request()->has('id'))){
            // add listing statistics info
            listing_statistics::query()->create([
                'listing_id'=>$listing_obj->id,
                'no_search'=>0,
                'no_seen'=>0,
                'no_contact_tried'=>0,
            ]);
        }
        return messages::success_output([trans('messages.saved_successfully')]);


    }

    public function search(){
        $requested = request()->all();
        $data_filtered =  filter_listings::filter_data($requested);
        return messages::success_output('',$data_filtered);
    }

    public function count_seen_statistics(){
        count_listing_statistics::count_seen(request('id'));
        return true;
    }

    public function send_email(){
        $listing = listings_info::query()->with('user')->find('listing_id');
        return request()->root();
        send_email::send(
            request('title'),
            request('body'),
          request()->root().'/listings/details?id='.request('listing_id'),
            'اضغط هنا',$listing->user->email
        );
    }

    public function pay_listing(){
        $listing = listings_info::query()->find(request('listing_id'));
        $listing_points = get_pointsprice_of_place::get_price_point_ad($listing->area_id);
        $user = User::query()->find(auth()->id());
        if($listing->payment_status == 0){
            if(auth()->user()->total_points >= $listing_points ){
                $user->total_points = $user->total_points - $listing_points;
                $user->save();

                $listing->payment_status = 1;
                $listing->save();

                return messages::success_output(trans('keywords.payment_success'));
            }else{
                return messages::error_output(trans('errors.not_enough_points_to_pay_for_this_listing'));
            }
        }else{
            return messages::error_output('هذا الاعلان تم دفعه مسبقا');
        }
    }

    public function show_number(){
        users_contact_seller::query()->create([
            'listing_id'=>request('listing_id'),
            'username'=>request('username'),
            'email'=>request('email'),
            'phone'=>request('phone')
        ]);
        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function best_users(){
        $data = best_users_listings::best_users();
        return messages::success_output('',$data);
    }
}
