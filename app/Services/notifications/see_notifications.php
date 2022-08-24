<?php


namespace App\Services\notifications;


use App\Models\notifications;

class see_notifications
{
    public static function see($receiver_id){
        notifications::query()
            ->where('receiver_id','=',$receiver_id)
            ->where('seen','=',0)->update([
               'seen'=>1
            ]);
    }
}
