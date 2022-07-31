<?php


namespace App\Handling_Data\dashboard;


use App\Models\areas;
use App\Models\cities;
use App\Models\countries;
use App\Models\governments;

class map_dashboard
{
    public static function handle_data($param,$map_type){

        switch ($map_type){
            case 'countries' : $data = countries::query(); break;
            case 'governments' : $data = governments::query(); break;
            case 'cities' : $data = cities::query(); break;
            case 'areas' : $data = areas::query(); break;
        }
        if($param['name'] != ''){
             $data->where($param['name'],'=',$param['value']);
        }
        switch ($map_type){
            case 'governments' : $data_parent = countries::selection()->get(); break;
            case 'cities' : $data_parent = governments::selection()->get(); break;
            case 'areas' : $data_parent = cities::selection()->get(); break;

        }

        return [
            'table_head_keys'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
             //   'tu_name'=>trans('keywords.tu_name'),
                'actions'=>trans('keywords.actions'),
            ],
            'actions'=>[
               'countries'=>'/dashboard/map/governments?country_id=',
               'governments'=>'/dashboard/map/cities?government_id=',
               'cities'=>'/dashboard/map/areas?city_id=',
            ],
            'data'=>$data->get(),
            'data_parent'=>$data_parent ?? [],
            'data_model'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
            //    'tu_name'=>trans('keywords.tu_name'),
            ]
        ];
    }
}
