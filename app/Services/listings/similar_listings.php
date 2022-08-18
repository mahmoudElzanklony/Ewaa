<?php


namespace App\Services\listings;


use App\Models\listings_info;

class similar_listings
{
    public static function get_data($city_id){
        return listings_info::selection()
            ->with('first_image')->withCount('images')
            ->whereHas('area',function($e) use ($city_id){
                $e->where('city_id','=',$city_id);
            })->orderBy('id','DESC')->limit(5)->get();
    }
}
