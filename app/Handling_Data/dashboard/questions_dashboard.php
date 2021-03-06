<?php


namespace App\Handling_Data\dashboard;


class questions_dashboard
{
    public static function handle_data(){
        $data = [
            'ar_question'=>trans('keywords.ar_question'),
            'en_question'=>trans('keywords.en_question'),
            'tu_question'=>trans('keywords.tu_question'),
            'question_type'=>trans('keywords.question_type'),
            'question_required'=>trans('keywords.question_required'),
            'ar_question_values'=>trans('keywords.ar_question_values'),
            'en_question_values'=>trans('keywords.en_question_values'),
            'tu_question_values'=>trans('keywords.tu_question_values'),
        ];
        return [
            'table_head_keys'=>$data,
            'data_model'=>$data,
        ];
    }
}
