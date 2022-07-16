<?php

namespace App\Http\Controllers;

use App\Keywords\WelcomeKeyWords;
use App\Models\categories;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    //
    public function index(){
        return Inertia::render('home',[
            'keywords'=> WelcomeKeyWords::get_key_words()
        ]);
    }
}
