<?php

namespace App\Http\Controllers;

use App\Keywords\ListingPostKeywords;
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
}
