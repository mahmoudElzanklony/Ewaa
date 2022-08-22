<?php


namespace App\Services\discussions;


use App\Models\discussion_answers;

class all_discussion_answers
{
    public static function get_answers($question_id){
        return discussion_answers::query()
            ->has('question')
            ->with(['user','reactions'])
            ->where('question_id','=',$question_id)
            ->orderBy('id','DESC')
            ->get();
    }
}
