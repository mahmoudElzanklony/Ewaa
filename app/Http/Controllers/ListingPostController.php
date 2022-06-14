<?php

namespace App\Http\Controllers;

use App\Keywords\ListIngPostDetailsKeywords;
use App\Keywords\ListingPostInfoKeywords;
use App\Keywords\ListingPostKeywords;
use App\Keywords\ListingPostPhotosKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListingPostController extends Controller
{
    //
    public function initialize(){
        return Inertia::render('listingpost/initialize',[
            'keywords'=>ListingPostKeywords::get_keywords(),
        ]);
    }


    public function info(){
        return Inertia::render('listingpost/info',[
            'keywords'=>ListingPostInfoKeywords::get_keywords(),
        ]);
    }

    public function photos(){
        return Inertia::render('listingpost/photos',[
            'keywords'=>ListingPostPhotosKeywords::get_keywords(),
        ]);
    }

    public function details(){
        return Inertia::render('listingpost/details',[
           'keywords'=>ListIngPostDetailsKeywords::get_keywords(),
        ]);
    }
}
