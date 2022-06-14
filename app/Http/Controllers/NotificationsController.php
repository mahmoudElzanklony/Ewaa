<?php

namespace App\Http\Controllers;

use App\Keywords\NotificationsKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationsController extends Controller
{
    //
    public function index(){
        return Inertia::render('notifications',[
            'keywords'=>NotificationsKeywords::get_keywords(),
        ]);
    }
}
