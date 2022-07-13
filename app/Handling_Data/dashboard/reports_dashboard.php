<?php


namespace App\Handling_Data\dashboard;


class reports_dashboard
{
    public static function handle_data(){

        return [
            'search_form'=>[
              'country_id'=>trans('keywords.countries'),
              'government_id'=>trans('keywords.governments'),
              'city_id'=>trans('keywords.cities'),
            ],
            'table_head_keys'=>[
                'name'=>trans('keywords.name'),
                'listings_number'=>trans('keywords.listings_number'),
            ],
        ];
    }
}
