<?php


namespace App\Services\listings;


use App\Models\advertising_points_price;
use App\Models\areas;
use App\Models\cities;

class get_pointsprice_of_place
{
    public static function get_price_point_ad($area_id){
        $area = areas::query()->find($area_id);
        // check price of area
        $check_price = advertising_points_price::query()
            ->where('place_id','=',$area_id)
            ->where('type','=','areas')->first();
        if($check_price == null){
            // check price of city
            $city = cities::query()->find($area->city_id);
            $check_price = advertising_points_price::query()
                ->where('place_id','=',$city->id)
                ->where('type','=','cities')->first();

            if($check_price == null){
                // check price of government
                $government = cities::query()->find($city->government_id);
                $check_price = advertising_points_price::query()
                    ->where('place_id','=',$government->id)
                    ->where('type','=','governments');

                if($check_price == null){
                    // check price of country
                    $check_price = advertising_points_price::query()
                        ->where('place_id','=',$government->country_id)
                        ->where('type','=','countries');
                }
            }
        }

        if($check_price == null){
            // no location has points so make it as default = 0
            return 0;
        }else{
            return $check_price->no_points;
        }
    }
}
