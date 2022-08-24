<?php


namespace App\Services\notifications;


use App\Models\notifications;

class no_of_unseen_notifications
{
    public static function get_number($receiver_id){
        return notifications::query()
            ->where('receiver_id','=',$receiver_id)
            ->where('seen','=',0)
            ->count();
    }
}
