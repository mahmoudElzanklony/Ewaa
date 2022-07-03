<?php


namespace App\Handling_Data\dashboard;


class categories_dashboard
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
                'sub_categories'=>trans('keywords.sub_categories'),
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
            ]
        ];
    }
}
