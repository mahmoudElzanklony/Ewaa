<?php


namespace App\Services\listings;


use App\Models\categories;

class sub_cats_listings_count
{
    public static function get_listings_count($cat_id){
        return categories::selection()
            ->where('parent_id','=',$cat_id)
            ->withCount('listings')
            ->get();
    }
}
