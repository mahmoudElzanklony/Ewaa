<?php


namespace App\Services\discussions;


use App\Models\discussion_questions;
use App\Models\questions;

class discussions_questions
{
    public static function questions($filter_data = []){
        return discussion_questions::query()->with('area',function($a){
                  $a->with('city');
            })
            ->when(array_key_exists('area_id',$filter_data) && $filter_data['area_id'] != '',function($e) use ($filter_data){
                $e->where('area_id','=',$filter_data['area_id']);
            })
            ->when(array_key_exists('city_id',$filter_data) && $filter_data['city_id'] != '',function($e) use ($filter_data){
                $e->join('areas','discussion-questions.area_id','=','areas.id')
                    ->where('areas.city_id','=',$filter_data['city_id']);
            })
            ->when(array_key_exists('user_id',$filter_data) && $filter_data['user_id'] != '',function($e) use ($filter_data){
                $e->where('user_id','=',$filter_data['user_id']);
            })
            ->when(array_key_exists('category_id',$filter_data) && $filter_data['category_id'] != 'all',function($e) use ($filter_data){
                $e->where('category_id','=',$filter_data['category_id']);
            })
            ->when(array_key_exists('question_type',$filter_data) && $filter_data['question_type'] != '' && $filter_data['question_type'] == 'has_answers' ,function($e) use ($filter_data){
                $e->has('answers');
            })
            ->when(array_key_exists('question_type',$filter_data) && $filter_data['question_type'] != '' && $filter_data['question_type'] == 'has_not_answers' ,function($e) use ($filter_data){
                $e->whereDoesntHave('answers');
            })
            ->withCount('answers')->orderBy('id','DESC')->paginate(1);
    }
}
