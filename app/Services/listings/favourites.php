<?php


namespace App\Services\listings;


use App\Http\traits\messages;
use App\Models\listings_info;

class favourites
{
    public static function fav(){
        $data = listings_info::selection()
            ->whereHas('favourite',function ($e){
                $e->where('user_id','=',auth()->id());
            })
            ->with('images','favourite')->get();
        //return messages::success_output('',$data);
        return $data;
    }
}
