<?php


namespace App\Services\categories;


use App\Models\categories;
use App\Models\listings_info;

class categories_data
{
    public static function get_categories_type($type = null , $branches = false , $count = false){
        return categories::selection()
            ->when($type == null , function($e) use ($type){
                $e->where('parent_id','=',$type);
            })
            ->when($type != null , function($e) use ($type){
                $e->where('parent_id','=',$type);
            })
            ->when($branches == true , function ($e){
                $e->with('branches');
            })
            ->when($count == true && $type != null, function ($e){
                $e->addSelect([
                    'count'=>listings_info::query()->whereColumn('listings_infos.category_id','categories.id')
                        ->where('payment_status','=',1)
                        ->selectRaw('count("id") as count')->latest()->limit(1)
                ]);
            })
            ->get();
    }
}
