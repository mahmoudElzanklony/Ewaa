<?php


namespace App\Services\map;


class get_location_where
{
    public static function get_where($val,$type,$column){
        $model_name = '\\App\Models\\'.$type;
        $data = $model_name::query()->select('id',app()->getLocale().'_name as name')
            ->where($column,$val)->get();
        return response()->json($data);
    }
}
