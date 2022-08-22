<?php


namespace App\Services\listings;


use App\Models\listing_statistics;

class count_listing_statistics
{
    public static function count_seen($id){
        $l = listing_statistics::query()->where('listing_id',$id)->first();
        $l->no_seen = $l->no_seen + 1;
        $l->save();
    }

    public static function count_search($id){
        $l = listing_statistics::query()->where('listing_id',$id)->first();
        $l->no_search = $l->no_search + 1;
        $l->save();
    }

    public static function count_calling($id){
        $l = listing_statistics::query()->where('listing_id',$id)->first();
        $l->no_contact_tried = $l->no_contact_tried + 1;
        $l->save();
    }
}
