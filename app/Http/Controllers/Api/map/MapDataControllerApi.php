<?php

namespace App\Http\Controllers\Api\map;

use App\Http\Controllers\Controller;
use App\Http\traits\messages;
use App\Models\areas;
use App\Models\cities;
use App\Models\governments;
use App\Services\listings\average_price_at_area;
use App\Services\map\cities_average_prices;
use App\Services\map\cities_number_of_listings;
use App\Services\map\countries_service;
use App\Services\map\governments_names_with_listings_image;
use Illuminate\Http\Request;

class MapDataControllerApi extends Controller
{
    //
    public function countries(){
        $data = countries_service::get_countries();
        return messages::success_output('',$data);
    }

    public function governments(){
        if(request()->has('id')) {
            $government_info = governments::selection()->with('map_images', function ($e) {
                $e->where('type', '=', 'governments');
            })->where('id', '=', request('id'))->first();
            $cities = cities_average_prices::get_data(request('id'));
            return messages::success_output('',[
                'cities'=>$cities,
                'government_info'=>$government_info
            ]);

        }else{
            $data = governments_names_with_listings_image::get_data(auth()->user()->country_id ?? null);
            return messages::success_output('',$data);
        }
    }

    public function cities(){
        if(request()->has('id')) {

            $average_areas = average_price_at_area::average_price_meter(request('id'));
            $city_info = cities::selection()->with('map_images',function($e){
                $e->where('type','=','cities');
            })->find(request('id'));
            return messages::success_output('', [
                'average_areas'=>$average_areas,
                'city_info'=>$city_info
            ]);
        }else{
            $data = cities_number_of_listings::get_listings_per_cities(auth()->user()->country_id ?? null);
            return messages::success_output('', $data);
        }
    }

    public function areas(){
        $data = areas::selection()->with(['listings','map_images'=>function($e){
            $e->where('type','=','areas');
        }])
            ->when(request()->has('id'),function($e){
                $e->where('id','=',request('id'));
            })
            ->orderBy('id','DESC')->paginate(9);
        return messages::success_output('', $data);
    }
}
