<?php

namespace App\Http\Controllers;

use App\Keywords\NotificationsKeywords;
use App\Services\notifications\no_of_unseen_notifications;
use App\Services\notifications\pagiante_notifications;
use App\Services\notifications\see_notifications;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationsController extends Controller
{
    //
    public function index(){
        see_notifications::see(auth()->id());
        $data = pagiante_notifications::get_notifications(auth()->id());
        return Inertia::render('notifications',[
            'keywords'=>NotificationsKeywords::get_keywords(),
            'data'=>$data,
            'new_notifications'=>no_of_unseen_notifications::get_number(auth()->id())
        ]);
    }
}
