<?php


namespace App\Services\listings;


use App\Models\countries;

class get_country_listings
{
    public static function get_listings_per_country($country_id = 0){
        $country_data = countries::selection()
            ->with('my_areas')
            ->when($country_id != 0 , function($e) use ($country_id){
               $e->where('id','=',$country_id);
            } )
            ->get();
        return $country_data;
    }
}
