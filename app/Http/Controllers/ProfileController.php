<?php

namespace App\Http\Controllers;

use App\Handling_Data\profile\listing_dashboard;
use App\Handling_Data\profile\statistics_profile_handling;
use App\Keywords\Profile\ProfileFavouritesKeywords;
use App\Keywords\Profile\ProfileKeywords;
use App\Keywords\Profile\ProfileListingsKeywords;
use App\Keywords\Profile\ProfileNotesKeywords;
use App\Keywords\Profile\ProfileStatisticsKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    //
    public function edit(){
        return Inertia::render('profile/main_info',[
           'keywords'=>ProfileKeywords::get_keywords(),
        ]);
    }

    public function dashboard_listings(){
        return Inertia::render('profile/listings_dashboard',[
            'keywords'=>ProfileListingsKeywords::get_keywords(),
            'data'=> listing_dashboard::handle_data(),
        ]);
    }

    public function statistics(){
        return Inertia::render('profile/statistics',[
            'keywords'=>ProfileStatisticsKeywords::get_keywords(),
            'data_numbers'=>statistics_profile_handling::handle_data(),
        ]);
    }

    public function favourites(){
        return Inertia::render('profile/favourites',[
            'keywords'=>ProfileFavouritesKeywords::get_keywords(),
        ]);
    }


    public function notes(){
        return Inertia::render('profile/notes',[
            'keywords'=>ProfileNotesKeywords::get_keywords(),
        ]);
    }
}
