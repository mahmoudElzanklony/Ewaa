<?php

namespace App\Http\Controllers;

use App\Keywords\AuthKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    //
    public function register(){
        return Inertia::render('auth/sign_up',[
           'keywords'=>AuthKeywords::get_keywords()
        ]);
    }
    public function login(){
        return Inertia::render('auth/sign_in',[
            'keywords'=>AuthKeywords::get_keywords()
        ]);
    }

    public function forget_password(){
        return Inertia::render('auth/forget_password',[
            'keywords'=>[
                'email'=>trans('keywords.email'),
                'save'=>trans('keywords.save'),
                'have_already_account'=>trans('keywords.have_already_account'),
                'sign_in'=>trans('keywords.sign_in'),
                'forget_password'=>trans('keywords.forget_password'),
                'send'=>trans('keywords.send'),
            ]
        ]);
    }

    public function new_password(){
        return Inertia::render('auth/new_password',[
            'keywords'=>[
                'password'=>trans('keywords.email'),
                'password_confirmed'=>trans('keywords.password_confirmed'),
                'save'=>trans('keywords.save'),
                'have_already_account'=>trans('keywords.have_already_account'),
                'send'=>trans('keywords.send'),
                'make_new_password'=>trans('keywords.make_new_password'),
            ]
        ]);
    }
}
