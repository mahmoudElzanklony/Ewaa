<?php

namespace App\Http\Controllers;

use App\Keywords\AuthKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    //
    public function register(){
        return Inertia::render('sign_up',[
           'keywords'=>AuthKeywords::get_keywords()
        ]);
    }
    public function login(){
        return Inertia::render('sign_in',[
            'keywords'=>AuthKeywords::get_keywords()
        ]);
    }
}
