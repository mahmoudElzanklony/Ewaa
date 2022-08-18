<?php


namespace App\Services\map;


use App\Models\countries;

class governments_names_with_listings_image
{
    public static function get_data($country_id = null){
        return countries::query()
            ->when($country_id != null , function ($e) use ($country_id){
                $e->where('countries.id','=',$country_id);
            })
            ->join('governments','governments.country_id','=','countries.id')
            ->leftJoin('cities','cities.government_id','=','governments.id')
            ->leftJoin('areas','areas.city_id','=','cities.id')
            ->leftJoin('listings_infos','listings_infos.area_id','=','areas.id')
            ->leftJoin('map_images','governments.id','=','map_images.map_id')
            ->groupBy('governments.id')
            ->selectRaw('countries.id,governments.id,governments.'.app()->getLocale().'_name as name,map_images.image')
            ->get();
    }
}
