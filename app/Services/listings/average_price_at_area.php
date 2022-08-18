<?php


namespace App\Services\listings;


use App\Models\listings_info;

class average_price_at_area
{
    public static function average_price_meter($city_id){
        $listings = listings_info::query()
            ->join('areas','listings_infos.area_id','=','areas.id')
            ->where('areas.city_id','=',$city_id)

            ->selectRaw('sum(listings_infos.price) / count(listings_infos.meters_number) as average ,count(listings_infos.id) as total_listings,areas.'.app()->getLocale().'_name as name')
            ->groupBy('listings_infos.area_id')
            ->get();
        return $listings;
    }
}
