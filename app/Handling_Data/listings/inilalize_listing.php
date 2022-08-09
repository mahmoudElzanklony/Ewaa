<?php


namespace App\Handling_Data\listings;


use App\Models\areas;
use App\Models\categories;
use App\Models\cities;
use App\Models\governments;
use App\Models\listings_info;

class inilalize_listing
{
    public static function handle_data($id){
        if($id != 0){
            $listing_info = listings_info::selection()->with('category')
                ->where('user_id','=',auth()->id())
                ->where('id','=',$id)->firstOrFail();
        }else if(request()->cookie('inilalize') != null){
            $listing_info = json_decode(request()->cookie('inilalize'),true);
            $listing_info['category']['parent_id'] = categories::query()->find($listing_info['category_id'])->parent_id;
        }else{
            $listing_info = null;
        }
        if($listing_info != null){
            $listing_info['city_id'] = areas::query()->find($listing_info['area_id'])->city_id;
            $listing_info['government_id'] = cities::query()->find($listing_info['city_id'])->government_id;
        }
        return [
          'categories'=>categories::selection()->get(),
          'governments'=>governments::selection()->where('country_id','=',auth()->user()->country_id)->get(),
          'listing_info'=>$listing_info ?? null,
          'place_data'=>[
                'government_id'=>'select_government',
                'city_id'=>'select_city',
                'area_id'=>'select_area',
           ],
        ];
    }
}
