<?php

namespace App\Http\Controllers\Api\notifications;

use App\Http\Controllers\Controller;
use App\Http\traits\messages;
use App\Services\notifications\pagiante_notifications;
use App\Services\notifications\see_notifications;
use Illuminate\Http\Request;

class NotificationsControllerApi extends Controller
{
    //
    public function all_notifications(){
        $data = pagiante_notifications::get_notifications(auth()->id());
        return messages::success_output('',$data);
    }

    public function seen(){
        see_notifications::see(auth()->id());
        return 1;
    }
}
