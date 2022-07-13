<?php


namespace App\Handling_Data\dashboard;


class map_dashboard
{
    public static function handle_data(){
        return [
            'table_head_keys'=>[
                'name'=>trans('keywords.name'),
                'actions'=>trans('keywords.actions'),
            ],
            'actions'=>[
               'countries'=>'/dashboard/map/governments?country_id=',
               'governments'=>'/dashboard/map/cities?government_id=',
               'cities'=>'/dashboard/map/areas?city_id=',
            ],
            'data_model'=>[
                'name'=>trans('keywords.name'),
            ]
        ];
    }
}
