<?php


namespace App\Services\statistics;


use App\Models\listings_info;
use Illuminate\Support\Facades\DB;

class filter_statistics_admin
{
    public static function filter_data($type , $year = 0){
        $data = [];
        for($i = 0; $i < 12; $i++){
            if($type == 'listings'){
                $data[$i] = listings_info::query()
                    ->where('payment_status','=',1);

            }else if($type == 'listings_pending'){
                $data[$i] = listings_info::query()->where('type','=',pending);
            }else{
                $data[$i] = DB::table($type);
            }
            $data[$i] = $data[$i]->whereMonth('created_at','=',$i+1)
                        ->when($year != 0,function ($e) use ($year){
                            $e->whereYear('created_at','=',$year);
                        })
                        ->count();
        }
        return $data;
    }
}
