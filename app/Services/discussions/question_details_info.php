<?php


namespace App\Services\discussions;


use App\Models\discussion_questions;

class question_details_info
{
    public static function info($question_id){
        return discussion_questions::query()->with(['user','area'=>function($e){
            $e->with('city');
        }])->find($question_id);
    }
}
