<?php


namespace App\Services\map;


use App\Models\governments;

class cities_number_of_listings
{
    public static function get_listings_per_cities($country_id = null){
        return governments::query()
            ->when($country_id != null , function ($e) use ($country_id){
                $e->where('country_id','=',$country_id);
            })
            ->join('cities','cities.government_id','=','cities.government_id')
            ->join('areas','cities.id','=','areas.city_id')
            ->join('listings_infos','listings_infos.area_id','=','areas.id')
            ->groupBy('listings_infos.area_id','listings_infos.rent_or_sale')
            ->selectRaw('cities.id,cities.ar_name as city_name,listings_infos.rent_or_sale,count(listings_infos.rent_or_sale) as total_listings')
            ->get();
    }
}
