<?php


namespace App\Services\map;


use App\Models\cities;
use Illuminate\Support\Facades\DB;

class cities_average_prices
{
    public static function get_data($government_id = null){
        return cities::query()
            ->leftJoin('map_images',function($e){
                $e->on('map_images.map_id','=','cities.id');
                $e->on('map_images.type','=',DB::raw("'cities'"));
            })
            ->join('governments','governments.id','=','cities.government_id')
            ->join('areas','cities.id','=','areas.city_id')
            ->join('listings_infos','listings_infos.area_id','=','areas.id')
            /*->join(DB::raw('(SELECT listing_photos.listing_id , listing_photos.image
                                 FROM listing_photos  GROUP BY
                                 listing_photos.listing_id) as t3'),'t3.listing_id','=','listings_infos.id')
            */->groupBy('cities.id')
            ->selectRaw('cities.id as city_id,cities.'.app()->getLocale().'_name as city_name ,
             cities.'.app()->getLocale().'_info as city_info ,areas.id as area_id ,
             areas.'.app()->getLocale().'_name as area_name,
             count(listings_infos.id) as total_listings ,listings_infos.'.app()->getLocale().'_info as info ,
             listings_infos.'.app()->getLocale().'_address as address ,
            map_images.image,listings_infos.id as listing_id,sum(listings_infos.price) as avg_meter')
            ->when($government_id != null,function($e) use ($government_id){
                $e->where('governments.id','=',$government_id);
            })
            ->get();
    }
}
