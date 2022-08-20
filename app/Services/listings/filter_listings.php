<?php


namespace App\Services\listings;


use App\Models\listings_info;

class filter_listings
{
    public static function filter_data($data_filtered){
        $data =  listings_info::query()->with(['user','first_image','answers'=>function($a){
                    $a->with('answers_collections')->with('question')->whereHas('question',function($e){
                        $e->where('cover_appearance','=',1);
                    });
                 }])
            ->where('payment_status','=','1')
            // check if i have specific area keyword
            ->when(array_key_exists('user_id',$data_filtered) && $data_filtered['user_id'] != null , function ($e) use ($data_filtered){
                $e->where('user_id','=',$data_filtered['user_id']);
            })
            // check if i have specific area keyword
            ->when(array_key_exists('area',$data_filtered) && $data_filtered['area'] != null , function ($e) use ($data_filtered){
                $e->join('areas','listings_infos.area_id','=','areas.id')
                  ->where('areas.ar_name','LIKE','%'.$data_filtered['area'].'%');
            })
            // check if i have  area id
            ->when(array_key_exists('area_id',$data_filtered) && $data_filtered['area_id'] != null , function ($e) use ($data_filtered){
                $e->where('area_id','=',$data_filtered['area_id']);
            })
            // check if i have specific type [ sale , rent ]
            ->when(array_key_exists('type',$data_filtered) && $data_filtered['type'] != null , function ($e) use ($data_filtered){
                $e->where('rent_or_sale','=',$data_filtered['type']);
                $e->whereIn('client_payment_status',detect_payment_client_ways::get_client_payment($data_filtered['type']));
            })
            // check if i have specific category
            ->when(array_key_exists('category',$data_filtered) && $data_filtered['category'] != null &&  $data_filtered['category'] != "all" , function ($e) use ($data_filtered){
                $e->where('category_id','=',$data_filtered['category']);
            })
            // check if i have min price
            ->when(array_key_exists('min_price',$data_filtered) && $data_filtered['min_price'] != null  , function ($e) use ($data_filtered){
                $e->where('price','>=',$data_filtered['min_price']);
            })
            // check if i have max price
            ->when(array_key_exists('max_price',$data_filtered) && $data_filtered['max_price'] != null  , function ($e) use ($data_filtered){
                $e->where('price','<=',$data_filtered['max_price']);
            })
            // check if i have payment price
            ->when(array_key_exists('payment',$data_filtered) && $data_filtered['payment'] != null &&  $data_filtered['payment'] != "all"  , function ($e) use ($data_filtered){
                $e->where('client_payment_status','=',$data_filtered['payment']);
            })
            // check if i have keywords
            ->when(array_key_exists('keywords',$data_filtered) && $data_filtered['keywords'] != null &&  $data_filtered['payment'] != "all"  , function ($e) use ($data_filtered){
                $e->where('ar_name','LIKE','%'.$data_filtered['keywords'].'%');
                $e->orWhere('en_name','LIKE','%'.$data_filtered['keywords'].'%');
                $e->orWhere('ar_info','LIKE','%'.$data_filtered['keywords'].'%');
                $e->orWhere('en_info','LIKE','%'.$data_filtered['keywords'].'%');
            });
            // check if i have questions & answers
            if(array_key_exists('questions',$data_filtered) && $data_filtered['questions'] != null){
                $data->join('listing_questions_answers','listing_questions_answers.listing_id','=','listings_infos.id');
                foreach ($data_filtered['questions'] as $column => $value){
                    if($value != null) {
                        $data
                            ->where('listing_questions_answers.question_id', '=', $column)
                            ->where('listing_questions_answers.answer', '=', $value);
                    }
                }
            }

            $data->where('listings_infos.type','=','live')
                ->selectRaw('listings_infos.id,listings_infos.user_id,
            listings_infos.'.app()->getLocale().'_name as name,
            listings_infos.'.app()->getLocale().'_info as info,listings_infos.'.app()->getLocale().'_address as address,
            listings_infos.price,listings_infos.meters_number,listings_infos.whatapp_status')
            // check if i sort by
            ->when(array_key_exists('sort_by',$data_filtered) && $data_filtered['sort_by'] != null   , function ($e) use ($data_filtered){
                $e->orderBy(array_keys($data_filtered['sort_by'])[0],array_values($data_filtered['sort_by'])[0]);
            });

        return $data->paginate(1);
    }
}
