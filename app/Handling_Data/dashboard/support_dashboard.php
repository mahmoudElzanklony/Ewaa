<?php


namespace App\Handling_Data\dashboard;


class support_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'name'=>trans('keywords.name'),
                'email'=>trans('keywords.email'),
                'message'=>trans('keywords.message'),
                'reply'=>trans('keywords.reply'),
                'actions'=>trans('keywords.actions'),
            ],
        ];
    }
}
