<?php

namespace App\Http\Controllers;

use App\Keywords\NeighboursGovermentCityKeywords;
use App\Keywords\NeighboursGovermentsKeywords;
use App\Keywords\NeighboursKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NeighbourhoodController extends Controller
{
    //
    public function index(){
        return Inertia::render('neighbours',[
            'keywords'=>NeighboursKeywords::get_keywords(),
        ]);
    }

    public function governments(){
        return Inertia::render('governments',[
            'keywords'=>NeighboursGovermentsKeywords::get_keywords(),
        ]);
    }

    public function governments_city(){
        return Inertia::render('government_city',[
            'keywords'=>NeighboursGovermentCityKeywords::get_keywords(),
        ]);
    }
}
