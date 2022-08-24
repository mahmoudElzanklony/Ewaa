<?php

namespace App\Http\Controllers\classes\packages;

use App\Http\Controllers\Controller;
use App\Http\traits\messages;
use App\Models\packages;
use App\Models\subscriptions;
use App\Models\User;
use App\Services\get_admin_info;
use App\Services\notifications\create_notification;
use Illuminate\Http\Request;

class PackagesServiceClass extends Controller
{
    //
    public function buy(){
        if(request()->has('package_id')){
            $package = packages::query()->find(request('package_id'));
            if($package != null){
                // add subscription info report
                subscriptions::query()->create([
                   'user_id'=>auth()->id(),
                   'package_id'=>request('package_id'),
                   'points_ordered'=>request('points_ordered'),
                   'min_points'=>$package->min_value,
                   'max_points'=>$package->max_value,
                   'point_price'=>$package->price,
                ]);
                // add points to user wallet
                $user = User::query()->find(auth()->id());
                $user->total_points = $user->total_points + intval(request('points_ordered'));
                $user->save();
                // send notification
                create_notification::new_notification([
                    'sender_id'=>get_admin_info::get_info()->id,
                    'receiver_id'=>auth()->id(),
                    'ar_info'=>'تمت عملية شراء نقاط الباقة بنجاح و تم اضافه النقاط الي رصيدك',
                    'en_info'=>'sale of points has been done successfully and points added to your wallet',
                    'tu'=>'',
                    'seen'=>0
                ]);
                return messages::success_output(trans('messages.confirmed_bought'));
            }else{
                return messages::success_output(trans('errors.missing_info'));

            }
        }else{
            return messages::success_output(trans('errors.missing_info'));
        }
    }
}
