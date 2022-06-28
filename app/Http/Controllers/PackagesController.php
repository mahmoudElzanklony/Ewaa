<?php

namespace App\Http\Controllers;

use App\Keywords\packages\ChargeKeywords;
use App\Keywords\packages\PackagesInfoKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackagesController extends Controller
{
    //
    public function charge(){
        return Inertia::render('packages/charge',[
            'keywords'=>ChargeKeywords::get_keywords(),
        ]);
    }

    public function package_info(){
        return Inertia::render('packages/packages_info',[
            'keywords'=>PackagesInfoKeywords::get_keywords(),
        ]);
    }
}
