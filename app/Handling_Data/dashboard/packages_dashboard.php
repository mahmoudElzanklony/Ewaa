<?php


namespace App\Handling_Data\dashboard;


class packages_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'min_value'=>trans('keywords.min_value'),
                'max_value'=>trans('keywords.max_value'),
                'point_price'=>trans('keywords.point_price'),
                'specific_price_for_specific_areas'=>trans('keywords.specific_price_for_specific_areas'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'min_value'=>trans('keywords.min_value'),
                'max_value'=>trans('keywords.max_value'),
                'point_price'=>trans('keywords.point_price'),
              //  'specific_price_for_specific_areas'=>trans('keywords.specific_price_for_specific_areas'),
                'image'=>trans('keywords.image'),
            ]
        ];
    }
}
