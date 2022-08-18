<?php


namespace App\Services\map;


use App\Models\cities;
use App\Models\countries;

class cities_related_to_country
{
    public static function my_cities($country_id = null){
        return  countries::selection()->with('my_cities')
            ->when($country_id != null,function ($e) use ($country_id){
                $e->where('id','=',$country_id);
            })->first()['my_cities'];
    }
}
