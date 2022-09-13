<?php

namespace App\Http\Controllers\classes\listings;

use App\Http\Controllers\Controller;
use App\Http\Requests\listingFormRequest;
use App\Http\traits\messages;
use App\Models\categories_questions;
use App\Models\listing_photos;
use App\Models\listing_questions_answers;
use App\Models\listing_statistics;
use App\Models\listings_info;
use App\Models\User;
use App\Services\listings\count_listing_statistics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use App\Http\traits\upload_image;

class ListingsServiceClass extends Controller
{
    use upload_image;
    public function save_inilaize(listingFormRequest $request){
        $validated = $request->validated();
        Cookie::queue('inilalize',json_encode($validated),100*100*100*100*100*100*100);
        return messages::success_output('','');
    }

    public function save_listing_info(){
        $data_coming = request()->all();
        if(!(request()->has('contact_me_by_email_status'))){
            $data_coming['contact_me_by_email_status'] = null;
        }
        if(request()->has('id')){
            $listing_info = listings_info::query()->find(request('id'));
            $category_id = $listing_info->category_id;
        }else if(request()->cookie('inilalize')){
            $category_id = json_decode(request()->cookie('inilalize'))->category_id;
        }else{
            return redirect('/listings/inilalize');
        }
        $my_questions = categories_questions::query()
            ->where('category_id','=',$category_id)
            ->get();
        // for loop questions of category and if there is not answered question then make it as null
        foreach($my_questions as $my_question){
            if(!(array_key_exists($my_question->question_id,$data_coming['questions']))){
                $data_coming['questions'][$my_question->question_id] = null;
            }
        }
        Cookie::queue('listing_info_data',json_encode($data_coming),100*100*100*100*100*100*100);
    }

    public function save_photos(){
        if(Cookie::has('inilalize') && Cookie::has('listing_info_data')) {
            $inilalize = json_decode(request()->cookie('inilalize'), true);
            $listing = json_decode(request()->cookie('listing_info_data'), true);
            // merge them as one array
            $listing_info = array_merge($inilalize, $listing);
            // get questions data
            $questions = $listing_info['questions'];
            // remove questions from listing object
            unset($listing_info['questions']);
            // insert or update object
            $user = User::query()->with('role')->find(auth()->id());
            if ($user->role->name != 'admin') {
                $listing_info['user_id'] = auth()->id();
            }else{
                // this is update want to create or update
                if (array_key_exists('id', $listing_info)){
                    $listing_info['user_id'] = listings_info::query()->find($listing_info['id'])->user_id;
                }else{
                    $listing_info['user_id'] = auth()->id();
                }
            }
            if (!(array_key_exists('id', $listing_info))) {
                // check about auto publish for user
                if($user->auto_publish == 1){
                    $listing_info['type'] = 'live';
                }else {
                    $listing_info['type'] = 'pending';
                }
            }

            $listing_obj = listings_info::query()->updateOrCreate([
                'id' => array_key_exists('id', $listing_info) ? $listing_info['id'] : null,
            ], $listing_info);
            // insert questions
            foreach ($questions as $key => $val) {
                if ($val != null) {
                    listing_questions_answers::query()->updateOrCreate([
                        'listing_id' => $listing_obj->id,
                        'question_id' => $key
                    ], [
                        'answer' => explode(',', $val)[0],
                        'type' => explode(',', $val)[1],
                    ]);
                }
            }
        }else{
            $listing_obj = new listings_info();
            $listing_obj->id = request('id');
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
        if(Cookie::has('inilalize')) {
            Cookie::queue(Cookie::forget('inilalize'));
        }
        if(Cookie::has('listing_info_data')) {
            Cookie::queue(Cookie::forget('listing_info_data'));
        }
        return messages::success_output([trans('messages.saved_successfully'),$listing_obj->id]);

    }

    public function seen(){
        foreach(request('ids') as $id){
            count_listing_statistics::count_seen($id);
        }
        return 1;
    }

    public function search(){
        foreach (request('ids') as $id){
            count_listing_statistics::count_search($id);
        }
    }

    public function call(){
        foreach (request('ids') as $id){
            count_listing_statistics::count_calling($id);
        }
    }


}
