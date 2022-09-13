<?php

namespace App\Http\Controllers;

use App\Keywords\SearchPageKeywords;
use App\Models\categories;
use App\Models\countries;
use App\Services\categories\categories_data;
use App\Services\listings\get_country_listings;
use App\Services\listings\sub_cats_listings_count;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchFilterController extends Controller
{
    //
    public function index(){
        if(request()->has('cat_id')) {

            $country_data = get_country_listings::get_listings_per_country(auth()->user()->country_id ?? 0);
            $sub_cats_listings = sub_cats_listings_count::get_listings_count(request('cat_id'));

            $sub_cats = categories_data::get_categories_type(request('cat_id'));
            return Inertia::render('search_page_filters', [
                'keywords' => SearchPageKeywords::get_keywords(),
                'sub_cats'=>$sub_cats,
                'country_data'=>$country_data,
                'all_listing_per_category'=>$sub_cats_listings,
                'category_name'=>categories::selection()->find(request('cat_id'))->name,
                'countries'=>countries::selection()->get(),
            ]);
        }else{
            return redirect('/');
        }
    }
}
