<?php


namespace App\Services\listings;


use App\Models\listings_info;

class listing_details
{
    public static function get_details($id){
        return listings_info::selection()
            ->with(['images','user'=>function($e){
                $e->withCount('listings');
            },'area'=>function($e){
                $e->with('city',function($e){
                   $e->with('government');
                });
            },'statistics','category','note'=>function($e){
                $e->where('user_id','=',auth()->user()->id ?? null);
            },'favourite'=>function($e){
                $e->where('user_id','=',auth()->user()->id ?? null);
            },'answers'=>function($a){
                $a->with('answers_collections')->with('question');
            }])->find($id);
    }
}
