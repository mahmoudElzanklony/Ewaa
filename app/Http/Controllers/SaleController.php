<?php

namespace App\Http\Controllers;

use App\Keywords\SalesKeywords;
use App\Keywords\SearchPageKeywords;
use App\Models\categories;
use App\Models\countries;
use App\Models\listings_info;
use App\Services\categories\categories_data;
use App\Services\listings\filter_listings;
use App\Services\users\best_users_listings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleController extends Controller
{
    //
    public function index(){


        $best_users =  best_users_listings::best_users();
       //return request()->all();
        $requested = request()->all();
        $data_filtered =  filter_listings::filter_data($requested);
        if(request()->has('main_cat')) {
            $sub_cats = categories_data::get_categories_type(request('main_cat') ?? null, false, true);
        }else{
            $sub_cats = categories::selection()
                ->with('parent_listings',function($e){
                    $e->where('payment_status','=',1);
                })
                ->where('parent_id','=',null)
                ->get();
        }
        return Inertia::render('sales',[
           'keywords'=>SalesKeywords::get_keywords(),
           'search_keywords'=>SearchPageKeywords::get_keywords(),
           'data'=>$data_filtered,
           'sub_cats'=>$sub_cats,
           'main_cat_info'=>categories::selection()->find(request('main_cat')),
           'requested_data'=>$requested,
           'best_users'=>$best_users,
           'countries'=>countries::selection()->get(),
        ]);
    }
}
