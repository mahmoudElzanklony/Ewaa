<?php

namespace App\Http\Controllers;

use App\Http\Controllers\classes\packages\PackagesServiceClass;
use App\Keywords\packages\ChargeKeywords;
use App\Keywords\packages\PackagesInfoKeywords;
use App\Services\packages\all_packages;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackagesController extends PackagesServiceClass
{
    //
    public function charge(){
        return Inertia::render('packages/charge',[
            'keywords'=>ChargeKeywords::get_keywords(),
        ]);
    }

    public function package_info(){
        $packages = all_packages::packages_info();
        return Inertia::render('packages/packages_info',[
            'keywords'=>PackagesInfoKeywords::get_keywords(),
            'packages'=>$packages
        ]);
    }
}
