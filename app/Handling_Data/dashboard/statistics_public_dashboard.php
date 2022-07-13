<?php


namespace App\Handling_Data\dashboard;


class statistics_public_dashboard
{
    public static function handle_data(){

        return [
            'data'=>[
                'users'=>100,
                'packages'=>4,
                'packages_orders'=>120,
                'listings'=>500,
                'listings_orders'=>310,
            ],
        ];
    }
}
