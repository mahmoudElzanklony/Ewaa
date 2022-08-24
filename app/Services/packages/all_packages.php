<?php


namespace App\Services\packages;


use App\Models\packages;

class all_packages
{
    public static function packages_info(){
        return packages::selection()->with('currency')
            ->with('countries')
            ->where('is_visible','=',1)
            ->whereRaw('(expiration_date > '.date('Y-m-d').' OR expiration_date is null)')
            ->get();
    }
}
