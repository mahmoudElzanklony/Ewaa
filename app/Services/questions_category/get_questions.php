<?php


namespace App\Services\questions_category;


use App\Http\traits\messages;
use App\Models\categories_questions;

class get_questions
{
    public static function get_data($category_id){
        $data = categories_questions::query()
            ->where('category_id','=',$category_id)
            ->with('question',function($q){
                $q->with('answers');
            })
            ->get();
        return $data;
    }
}
