<?php


namespace App\Handling_Data\dashboard;


class map_dashboard
{
    public static function handle_data(){
        return [
            'table_head_keys'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'tu_name'=>trans('keywords.tu_name'),
                'actions'=>trans('keywords.actions'),
            ],
            'actions'=>[
               'countries'=>'/dashboard/map/governments?country_id=',
               'governments'=>'/dashboard/map/cities?government_id=',
               'cities'=>'/dashboard/map/areas?city_id=',
            ],
            'data_model'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'tu_name'=>trans('keywords.tu_name'),
            ]
        ];
    }
}
