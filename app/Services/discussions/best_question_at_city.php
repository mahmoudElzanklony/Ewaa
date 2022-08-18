<?php


namespace App\Services\discussions;


use App\Models\discussion_questions;

class best_question_at_city
{
    public static function get_question($city){
        return discussion_questions::query()->whereHas('area',function($e) use ($city){
            $e->where('city_id','=',$city->id);
        })->withCount('answers')->first();
    }
}
