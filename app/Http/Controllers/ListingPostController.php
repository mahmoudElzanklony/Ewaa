<?php

namespace App\Http\Controllers;

use App\Keywords\ListingPostConfirmPaymentKeywords;
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
        if(request()->has('type')){
            $type= request('type');
        }else{
            $type = 'akar';
        }
        return Inertia::render('listingpost/details',[
           'keywords'=>ListIngPostDetailsKeywords::get_keywords(),
           'type'=>$type,
        ]);
    }

    public function confirm_payment(){
        return Inertia::render('listingpost/payment_confirmation',[
            'keywords'=>ListingPostConfirmPaymentKeywords::get_keywords(),
        ]);
    }
}
