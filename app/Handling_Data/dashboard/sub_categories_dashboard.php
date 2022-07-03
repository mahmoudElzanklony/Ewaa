<?php


namespace App\Handling_Data\dashboard;


class sub_categories_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'tu_name'=>trans('keywords.tu_name'),
                'ar_description'=>trans('keywords.ar_description'),
                'en_description'=>trans('keywords.en_description'),
                'tu_description'=>trans('keywords.tu_description'),
                'questions'=>trans('keywords.questions'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'tu_name'=>trans('keywords.tu_name'),
                'ar_description'=>trans('keywords.ar_description'),
                'en_description'=>trans('keywords.en_description'),
                'tu_description'=>trans('keywords.tu_description'),
                'image'=>trans('keywords.image'),
            ],
            'question_data'=>[
                'ar_question'=>trans('keywords.ar_question'),
                'en_question'=>trans('keywords.en_question'),
                'tu_question'=>trans('keywords.tu_question'),
                'question_type'=>trans('keywords.question_type'),
                'question_required'=>trans('keywords.question_required'),
                'ar_question_values'=>trans('keywords.ar_question_values'),
                'en_question_values'=>trans('keywords.en_question_values'),
                'tu_question_values'=>trans('keywords.tu_question_values'),
            ]
        ];
    }
}
