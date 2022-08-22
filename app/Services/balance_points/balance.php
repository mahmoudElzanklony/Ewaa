<?php


namespace App\Services\balance_points;


use App\Models\subscriptions;

class balance
{
    public static function get_balance($user_id){
        return subscriptions::query()->with('package')->where('user_id',$user_id)->get();
    }
}
