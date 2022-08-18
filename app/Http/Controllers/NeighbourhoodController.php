<?php

namespace App\Http\Controllers;

use App\Keywords\NeighboursGovermentCityKeywords;
use App\Keywords\NeighboursGovermentsKeywords;
use App\Keywords\NeighboursKeywords;
use App\Models\cities;
use App\Models\countries;
use App\Models\discussion_questions;
use App\Models\governments;
use App\Models\listings_info;
use App\Services\discussions\best_question_at_city;
use App\Services\listings\average_price_at_area;
use App\Services\listings\get_country_listings;
use App\Services\listings\similar_listings;
use App\Services\listings\sub_cats_listings_count;
use App\Services\map\cities_average_prices;
use App\Services\map\cities_number_of_listings;
use App\Services\map\governments_names_with_listings_image;
use App\Services\users\best_users_listings;
use App\Services\users\get_country_of_user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class NeighbourhoodController extends Controller
{
    //
    public function index(){
        $cities_data = cities_number_of_listings::get_listings_per_cities(auth()->user()->country_id ?? null);
        $governments_data = governments_names_with_listings_image::get_data(auth()->user()->country_id ?? null);
        return Inertia::render('neighbours',[
            'keywords'=>NeighboursKeywords::get_keywords(),
            'cities_data'=>$cities_data,
            'governments'=>$governments_data,
            'country'=>get_country_of_user::get_country_obj()
        ]);
    }

    public function governments(governments $government){
        $government_info = governments::selection()->with('map_images',function($e){
            $e->where('type','=','governments');
        })->where('id','=',$government->id)->first();
        $cities = cities_average_prices::get_data($government->id);
        return Inertia::render('governments',[
            'keywords'=>NeighboursGovermentsKeywords::get_keywords(),
            'cities'=>$cities,
            'government'=>$government_info
        ]);
    }

    public function governments_city(governments $government ,cities $city){
        $government = governments::selection()->first($government->id);
        $average_areas = average_price_at_area::average_price_meter($city->id);
        $city_info = cities::selection()->with('map_images',function($e){
            $e->where('type','=','cities');
        })->find($city->id);
        $best_users =  best_users_listings::best_users();
        $best_question = best_question_at_city::get_question($city);
        $similar_listings = similar_listings::get_data($city->id);
        $cities_data = cities_number_of_listings::get_listings_per_cities(auth()->user()->country_id ?? null);

        return Inertia::render('government_city',[
            'keywords'=>NeighboursGovermentCityKeywords::get_keywords(),
            'average_areas'=>$average_areas,
            'government'=>$government,
            'city'=>$city_info,
            'best_users'=>$best_users,
            'best_question'=>$best_question,
            'similar_listings'=>$similar_listings,
            'cities_data'=>$cities_data,
            'country'=>countries::selection()->first($government->id)
        ]);
    }
}
