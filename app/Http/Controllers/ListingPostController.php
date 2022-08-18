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
use App\Models\areas;
use App\Models\categories_questions;
use App\Models\governments;
use App\Models\listing_photos;
use App\Models\listings_info;
use App\Services\listings\get_pointsprice_of_place;
use App\Services\listings\payment_lising_points;
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

    public function authorize_listing($id){
        $listing = listings_info::query()->where('id','=',$id)
            ->where('user_id','=',auth()->id())->first();
        if($listing == null){
            abort(403,trans('errors.unauthorized'));
        }
    }


    public function info(){
        if(request()->has('id') && request()->cookie('inilalize') != null){
            $this->authorize_listing(request('id'));
            $id = request('id');
        }else{
            $id = 0;
            if(request()->cookie('inilalize') == null){
                return redirect('/listing/initialize');
            }
        }
        return Inertia::render('listingpost/info',[
            'keywords'=>ListingPostInfoKeywords::get_keywords(),
            'handeling_data'=>info_listing::handel_data($id),
        ]);
    }

    public function photos(){
        if(request()->has('id')){
            $listing_photos = listing_photos::query()
                ->where('listing_id','=',request('id'))->get();
        }else{
            $listing_photos = [];
        }
        return Inertia::render('listingpost/photos',[
            'keywords'=>ListingPostPhotosKeywords::get_keywords(),
            'photos'=>$listing_photos
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
        if(request()->has('id')){
            $listing_info = listings_info::selection()->find(request('id'));
            if($listing_info == null){
                return redirect('/profile/dashboard');
            }
            if($listing_info->user_id != auth()->id() || $listing_info->payment_status == 1) {
                return redirect('/profile/dashboard?tab=live_listings');
            }
        }else{
            abort(403,trans('errors.unauthorized'));
        }
        $area = areas::query()->with('city')->find($listing_info->area_id);
        return Inertia::render('listingpost/payment_confirmation',[
            'keywords'=>ListingPostConfirmPaymentKeywords::get_keywords(),
            'data'=>[
                'area'=>$area,
                'government'=>governments::query()->with('country')->find($area->city->id),
                'listing_data'=>$listing_info,
                'listing_obj_image'=>listing_photos::query()
                    ->where('listing_id','=',$listing_info->id)->first(),
                'point_number'=>get_pointsprice_of_place::get_price_point_ad($area->id)
            ]
        ]);
    }

    public function payment_points(){
        $id = request('id');
        $points = request('points');
        return payment_lising_points::payment_point($id,$points);
    }
}
