<?php


namespace App\Handling_Data\dashboard;


use App\Models\advertising_points_price;
use App\Models\countries;
use App\Models\currencies;
use App\Models\packages;

class pointad_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'type'=>trans('keywords.type'),
                'no_points'=>trans('keywords.no_points'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'no_points'=>trans('keywords.no_points'),
                'type'=>trans('keywords.type'),
            ],
            'type_data'=>[
                ''=>trans('keywords.select_type'),
                'countries'=>trans('keywords.country'),
                'governments'=>trans('keywords.government'),
                'cities'=>trans('keywords.city'),
                'areas'=>trans('keywords.area'),
            ],
            'data'=>[
                advertising_points_price::query()->get()
            ],
            'place_data'=>[
                'country_id'=>'select_country',
                'government_id'=>'select_government',
                'city_id'=>'select_city',
                'area_id'=>'select_area',
            ],
            'country_id'=>countries::selection()->get(),
            'government_id'=>[],
            'city_id'=>[],
            'area_id'=>[],
        ];
    }
}
