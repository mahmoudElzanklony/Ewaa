<?php


namespace App\Services\categories;


use App\Models\categories;

class categories_data
{
    public static function get_categories_type($type = null){
        return categories::selection()
            ->where('parent_id','=',$type)
            ->when($type == null , function ($e){
                $e->with('branches');
            })
            ->get();
    }
}
