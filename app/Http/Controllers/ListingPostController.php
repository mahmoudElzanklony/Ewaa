<?php

namespace App\Http\Controllers;

use App\Handling_Data\listings\info_listing;
use App\Handling_Data\listings\inilalize_listing;
use App\Http\Controllers\classes\listings\ListingsServiceClass;
use App\Keywords\ListingPostConfirmPaymentKeywords;
use App\Keywords\ListIngPostDetailsKeywords;
use App\Keywords\ListingPostInfoKeywords;
use App\Keywords\ListingPostKeywords;
use App\Keywords\ListingPostPhotosKeywords;
use App\Models\categories_questions;
use App\Models\listings_info;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListingPostController extends ListingsServiceClass
{
    //
    public function initialize(){
        return Inertia::render('listingpost/initialize',[
            'keywords'=>ListingPostKeywords::get_keywords(),
            'data'=>inilalize_listing::handle_data(request('id')??0)
        ]);
    }


    public function info(){
        if(request()->has('id')){
            $id = request('id');
        }else{
            $id = 0;
            if(request()->cookie('inilalize') == null){
                return redirect('/listings/initialize');
            }
        }
        return Inertia::render('listingpost/info',[
            'keywords'=>ListingPostInfoKeywords::get_keywords(),
            'handeling_data'=>info_listing::handel_data($id),
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
