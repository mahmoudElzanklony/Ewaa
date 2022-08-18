<?php


namespace App\Services\listings;


use App\Http\traits\messages;
use App\Models\listings_info;
use App\Models\User;

class payment_lising_points
{
    public static function payment_point($id,$points){
        $listing = listings_info::query()->find($id);
        if($listing->payment_status == 0){
            if($listing->user_id = auth()->id()){
                if($points <= auth()->user()->total_points){
                    // delete points from user account
                    $user = User::query()->find(auth()->id());
                    $user->total_points = $user->total_points - $points;
                    $user->save();
                    // change status of listing
                    $listing->payment_status = 1;
                    $listing->save();
                    return messages::success_output(trans('keywords.payment_success'));
                }else{
                    return messages::error_output(trans('errors.not_enough_points'));
                }
            }else{
                return messages::error_output(trans('errors.payment_unauthorized_user'));
            }
        }else{
            return messages::error_output(trans('errors.payment_before'));
        }
    }
}
