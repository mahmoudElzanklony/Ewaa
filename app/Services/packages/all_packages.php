<?php


namespace App\Services\packages;


use App\Models\packages;

class all_packages
{
    public static function packages_info(){
        return packages::selection()->with('currency')
            ->whereHas('countries',function($e){
                $e->where('country_id',auth()->user()->country_id ?? null);
            })->where('is_visible','=',1)
            ->get();
    }
}
