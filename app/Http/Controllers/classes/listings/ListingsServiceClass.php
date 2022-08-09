<?php

namespace App\Http\Controllers\classes\listings;

use App\Http\Controllers\Controller;
use App\Http\Requests\listingFormRequest;
use App\Http\traits\messages;
use App\Models\categories_questions;
use App\Models\listings_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class ListingsServiceClass extends Controller
{
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
}
