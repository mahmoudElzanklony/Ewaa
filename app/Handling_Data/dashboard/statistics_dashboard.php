<?php


namespace App\Handling_Data\dashboard;


class statistics_dashboard
{
    public static function handle_data(){

        return [
           'table_head_keys'=>[
               trans('keywords.image'),
               trans('keywords.username'),
               trans('keywords.email'),
               trans('keywords.phone'),
               trans('keywords.address'),
               trans('keywords.block'),
               trans('keywords.auto_publish'),
               trans('keywords.actions'),
           ],
           'data_model'=>[
               'username'=>trans('keywords.username'),
               'email'=>trans('keywords.email'),
               'password'=>trans('keywords.password'),
               'phone'=>trans('keywords.phone'),
               'address'=>trans('keywords.address'),
               'image'=>trans('keywords.image'),
           ]
        ];
    }
}
