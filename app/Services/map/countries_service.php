<?php


namespace App\Services\map;
use App\Models\countries;

class countries_service
{
    public static function get_countries(){
        return countries::selection()->get();
    }
}
