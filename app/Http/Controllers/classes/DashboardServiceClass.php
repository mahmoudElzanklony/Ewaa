<?php

namespace App\Http\Controllers\classes;

use App\Http\Controllers\Controller;
use App\Http\Requests\categoriesFormRequest;
use App\Http\Requests\currenciesFormRequest;
use App\Http\Requests\mapFormRequest;
use App\Http\Requests\packagesFormRequest;
use App\Http\Requests\questionsFormRequest;
use App\Http\Requests\subCategoriesFormRequest;
use App\Http\Requests\supportFormRequest;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Models\advertising_points_price;
use App\Models\answers;
use App\Models\areas;
use App\Models\categories;
use App\Models\categories_questions;
use App\Models\cities;
use App\Models\countries;
use App\Models\currencies;
use App\Models\governments;
use App\Models\listing_photos;
use App\Models\listings_info;
use App\Models\map_images;
use App\Models\packages;
use App\Models\packages_prices_places;
use App\Models\questions;
use App\Models\support;
use App\Models\User;
use App\Services\listings\average_price_at_area;
use App\Services\listings\get_pointsprice_of_place;
use App\Services\map\get_location_where;
use App\Services\statistics\filter_statistics_admin;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;

class DashboardServiceClass extends Controller
{
    //
    use upload_image;
    public function save_category(categoriesFormRequest $request){
        $validated = $request->validated();
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'categories');
            $validated['image'] = $image;
        }else if(!(request()->has('id'))){
            $validated['image'] = 'default.png';
        }
        $item = categories::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');
    }

    // save question
    public function save_question(questionsFormRequest $request){

        $question_data = request()->except(['ar_answers','en_answers','tu_answers']);
        // check if i had image icon
        if(request()->hasFile('icon')){
            $icon = $this->upload(request('icon'),'icons');
            $question_data['icon'] = $icon;
        }
        // make question
        $question = questions::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id') : null
        ],$question_data);
        if(request('type') == 'select'){
            $answers = request()->only(['ar_answers','en_answers','tu_answers']);

            // check if this question has old answers
            $answers_old_data = answers::query()->where('question_id','=',$question->id)->get();
            // check if answers old data has data
            if($answers_old_data->isNotEmpty()){
                // has data
                for($i = 0; $i < sizeof($answers['ar_answers']); $i++){
                    $answer = [
                        'question_id'=>$question->id,
                        'ar_name'=>$answers['ar_answers'][$i],
                        'en_name'=>$answers['en_answers'][$i],
                        'tu_name'=>$answers['tu_answers'][$i]
                    ];
                    $updated = answers::query()->updateOrCreate([
                        'id'=>request('ids')[$i] ??  null
                    ],$answer);
                }
            }else{
                // no data yet
                // create new answers
                for($i = 0; $i < sizeof($answers['ar_answers']); $i++){
                    $answer = [
                        'question_id'=>$question->id,
                        'ar_name'=>$answers['ar_answers'][$i],
                        'en_name'=>$answers['en_answers'][$i],
                        'tu_name'=>$answers['tu_answers'][$i]
                    ];
                    answers::query()->create($answer);
                }
            }
        }else{
            // delete old answers
             answers::query()->where('question_id','=',$question->id)->delete();
        }
        $question = questions::query()->with('answers')->find(request('id') ?? $question->id);
        return messages::success_output(trans('messages.saved_successfully'),$question,request()->has('id') ? 'update':'insert');
    }
    // save sub category
    public function save_sub_category(subCategoriesFormRequest $request){
        // update of create sub category
        $category = $request->only('ar_name_cat','en_name_cat','tu_name_cat','ar_info','en_info','tu_info','parent_id');
        // check if  i has an image file
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'categories');
            $category['image'] = $image;
        }else if(!(request()->has('id'))){
            $category['image'] = 'default.png';
        }
        $category['ar_name'] = request('ar_name_cat');
        $category['en_name'] = request('en_name_cat');
        $category['tu_name'] = request('tu_name_cat');
        $sub_cat = categories::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$category);
        // end of create sub category
        // create questions to specific category
        if(request()->has('questions') && sizeof(request('questions')) > 0){
            // old_questions_ids
             for($i = 0; $i < sizeof(request('questions')); $i++){
                 // create or update question related to category
                 categories_questions::query()->updateOrCreate([
                     'id'=>request('old_questions_ids')[$i] ?? null
                 ],[
                     'category_id'=>$sub_cat['id'],
                     'question_id'=>request('questions')[$i]
                 ]);
             }
        }
        // check if there is another question added to this category
        if(request('ar_name') != null && request('en_name') != null){
            $new_question = request()->only('ar_name','en_name','tu_name','required_status','type');
            // validation
            request()->validate([
                'ar_name'=>'required',
                'en_name'=>'required',
                'required_status'=>'required',
                'type'=>'required',
            ]);
            // create new question
            $question = questions::query()->create($new_question);
            // assign this question to old category
            categories_questions::query()->create([
               'category_id'=>$sub_cat['id'],
                'question_id'=>$question->id
            ]);
            // check if this question type is select
            if(request('type') == 'select'){
                $answers = request()->only(['ar_answers','en_answers','tu_answers']);
                // create new answers
                for($i = 0; $i < sizeof($answers['ar_answers']); $i++){
                    $answer = [
                        'question_id'=>$question->id,
                        'ar_name'=>$answers['ar_answers'][$i],
                        'en_name'=>$answers['en_answers'][$i],
                        'tu_name'=>$answers['tu_answers'][$i]
                    ];
                    answers::query()->create($answer);
                }
            }
        }
        $cat_result = categories::query()->with('questions','cat_questions')
            ->select('id','ar_name as ar_name_cat','en_name as en_name_cat','tu_name as tu_name_cat'
                ,'ar_info','en_info','tu_info','parent_id','image')->find($sub_cat->id);

        return messages::success_output(trans('messages.saved_successfully'), $cat_result,request()->has('id') ? 'update':'insert');

    }

    // save map location
    public function save_location(mapFormRequest $request){
        $validated = $request->validated();
        switch (request('type')){
            case 'countries': $item = countries::query(); break;
            case 'governments': $item = governments::query(); break;
            case 'cities': $item = cities::query(); break;
            case 'areas': $item = areas::query(); break;
        }

        $result = $item->updateOrCreate([
            'id'=>request()->has('id') ? request('id') : null
        ],$validated);
        // check if there images for this location
        if(request()->hasFile('images')){
            foreach (request()->file('images') as $file) {
                $image = $this->upload($file, 'maps');
                map_images::query()->create([
                    'map_id' => $result->id,
                    'image' => $image,
                    'type'=>request('type')
                ]);
            }
        }

        return messages::success_output(trans('messages.saved_successfully'), $result,request()->has('id') ? 'update':'insert');

    }

    public function save_package(packagesFormRequest $request){
        $pavkage_data =  $request->validated();
        // check if i have image
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'packages');
            $pavkage_data['image'] = $image;
        }else if(!(request()->has('id'))){
            $pavkage_data['image'] = 'default.png';
        }
        // update or create new package
        $package = packages::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id') : null
        ],$pavkage_data);
        // check if there any give countries data
        if(request()->has('country_id')){
            for($i = 0; $i < sizeof(request('country_id')); $i++){
                // update or create package price data
                packages_prices_places::query()->updateOrCreate([
                    'id'=>request()->has('country_package_ids') ? request('country_package_ids')[$i] : null
                ],[
                    'package_id'=>$package->id,
                    'country_id'=>request('country_id')[$i],
                    'price'=>request('prices')[$i]
                ]);
            }
        }
        $result = packages::query()->with(['countries'=>function($e){
            $e->with('country_info');
        },'currency'])->find($package->id);
        return messages::success_output(trans('messages.saved_successfully'), $result,request()->has('id') ? 'update':'insert');


    }

    public function save_currency(currenciesFormRequest $request){
        $data = $request->validated();
        $result = currencies::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null,
        ],$data);
        return messages::success_output(trans('messages.saved_successfully'), $result,request()->has('id') ? 'update':'insert');
    }

    public function update_listing(){
        $data = listings_info::query()->updateOrCreate([
           'id'=>request('id')
        ],[
            'type'=>request('status'),
        ]);
        // check if its rejected
        if(request('status') == ''){
            // return points to user
            $no_points = get_pointsprice_of_place::get_price_point_ad($data->area_id);
            $user = User::query()->find($data->user_id);
            $user->total_points = $user->total_points + $no_points;
            $user->save();
        }
        return messages::success_output(['title'=>trans('messages.saved_successfully'),'icon'=>'success']);

    }

    public function save_user(usersFormRequest $request){
        $validated = $request->validated();
        // check if image has been uploaded
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'users');
            $validated['image'] = $image;
        }else if(!(request()->has('id'))){
            $validated['image'] = 'default.png';
        }
        // check if password is updated
        if(request()->has('password')){
            $validated['password'] = bcrypt(request('password'));
        }
        $item = User::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);
        $item = User::query()->with('country')->find(request('id'));
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }

    public function filter_statistics(){
        return response()->json(filter_statistics_admin::filter_data(request('type'),request('year')));
    }

    public function change_map(){
        $type = request('search_at');
        $val = request('value');
        $column = request('type');
        return get_location_where::get_where($val,$type,$column);

    }

    public function average_area_price(){
        $data = average_price_at_area::average_price_meter(request('city_id'));
        return response()->json($data);
    }

    public function save_support(supportFormRequest $request){
        $data = $request->validated();
        $item = support::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$data);
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }

    public function save_pointad(){
        switch(request('type')){
            case 'countries':{$place_id = request('country_id');} break;
            case 'governments':{$place_id = request('government_id');} break;
            case 'cities':{$place_id = request('city_id');} break;
            case 'areas':{$place_id = request('area_id');} break;
        }
        $data = [
            'type'=>request('type'),
            'place_id'=>$place_id,
            'no_points'=>request('no_points'),
        ];
        $d = advertising_points_price::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$data);


        if($d->type == 'countries'){
            $d['place'] = countries::query()->find($d['place_id']);
        }else if ($d->type == 'governments'){
            $d['place'] = governments::query()->find($d['place_id']);
        }else if ($d->type == 'cities'){
            $d['place'] = cities::query()->find($d['place_id']);
        }else if ($d->type == 'areas'){
            $d['place'] = areas::query()->find($d['place_id']);
        }


        return messages::success_output(trans('messages.saved_successfully'),$d,request()->has('id') ? 'update':'insert');

    }

    public function save_settings(usersFormRequest $request){
        $validated = $request->validated();
        if(request()->has('password') && request()->filled('password')){
            $validated['password'] = bcrypt(request('password'));
        }
        $user = User::query()->where('id','=',auth()->id())->update($validated);
        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function accept_listing(){
        $id = request('id');
        $listing = listings_info::query()->findOrFail($id);
        $listing->type = 'live';
        $listing->save();
    }

}
