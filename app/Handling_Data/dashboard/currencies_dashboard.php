<?php


namespace App\Handling_Data\dashboard;


use App\Models\currencies;

class currencies_dashboard
{
    public static function handle_data(){
        return [
            'table_head_keys'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
              //  'tu_name'=>trans('keywords.tu_name'),
                'currency_code'=>trans('keywords.currency_code'),
                'country_code'=>trans('keywords.country_code'),
                'default_currency'=>trans('keywords.default_currency'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
            //  'tu_name'=>trans('keywords.tu_name'),
                'currency_code'=>trans('keywords.currency_code'),
                'country_code'=>trans('keywords.country_code'),
                'is_default'=>trans('keywords.default_currency'),
            ],
            'data'=> currencies::query()->get()
        ];
    }

}
