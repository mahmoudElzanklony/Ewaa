<?php

namespace App\Http\Controllers;

use App\Keywords\ask\AnswersKeywords;
use App\Keywords\ask\AskNeighborsKeywords;
use App\Models\categories;
use App\Models\cities;
use App\Models\countries;
use App\Models\discussion_answers;
use App\Models\discussion_questions;
use App\Models\governments;
use App\Models\listing_statistics;
use App\Models\listings_info;
use App\Models\questions;
use App\Services\discussions\all_discussion_answers;
use App\Services\discussions\discussions_questions;
use App\Services\discussions\question_details_info;
use App\Services\listings\similar_listings;
use App\Services\map\cities_number_of_listings;
use App\Services\map\cities_related_to_country;
use App\Services\users\get_country_of_user;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AskNeighborsController extends AskNeighbourService
{
    //
    public function index(){
        if(auth()->check()) {
            $cities = cities_related_to_country::my_cities(auth()->user()->country_id);
        }else{
            $cities = cities::all();
        }
        $questions = discussions_questions::questions(request()->all());
        return Inertia::render('questions/ask_neighbors',[
            'keywords'=>AskNeighborsKeywords::get_keywords(),
            'cities'=>$cities,
            'categories'=>categories::selection()->where('parent_id','!=',null)->get(),
            'questions'=>$questions,
            'requested_data'=>request()->all(),
            'cities_listings'=>cities_number_of_listings::get_listings_per_cities(auth()->user()->country_id ?? null),
            'country'=>get_country_of_user::get_country_obj()
        ]);
    }

    public function answers(){
        $question = question_details_info::info(request()->segment(2));
        if($question == null){
            return redirect('/ask-neighbours?question_type=all');
        }
        $answers = all_discussion_answers::get_answers(request()->segment(2));
        $similar_listings = similar_listings::get_data($question->area->city->id);
        return Inertia::render('questions/answers',[
           'keywords'=>AnswersKeywords::get_keywords(),
            'data'=>[
                'question'=>$question,
                'answers'=>$answers,
                'similar_listings'=>$similar_listings
            ]
        ]);
    }


}
