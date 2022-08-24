<?php

namespace App\Http\Controllers;

use App\Http\Controllers\classes\auth\AuthServicesClass;
use App\Http\Requests\usersFormRequest;
use App\Keywords\AuthKeywords;
use App\Models\roles;
use App\Models\User;
use App\Services\auth\register_service;
use App\Services\map\countries_service;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AuthController extends AuthServicesClass
{
    // get
    public function register(){
        return Inertia::render('auth/sign_up',[
           'keywords'=>AuthKeywords::get_keywords(),
           'countries'=>countries_service::get_countries()
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
        if(request()->has('id') && request()->has('serial')){
            $user = User::query()
                ->where('id','=',request('id'))
                ->where('serial_number','=',request('serial'))
                ->first();
            if($user != null){
                return Inertia::render('auth/new_password',[
                    'keywords'=>[
                        'password'=>trans('keywords.email'),
                        'password_confirmed'=>trans('keywords.password_confirmed'),
                        'save'=>trans('keywords.save'),
                        'have_already_account'=>trans('keywords.have_already_account'),
                        'send'=>trans('keywords.send'),
                        'make_new_password'=>trans('keywords.make_new_password'),
                    ],
                    'email'=>$user->email,
                ]);
            }else{
                return redirect('/');
            }
        }else{
            return redirect('/');
        }
    }

    public function logout(){
        session()->forget('type');
        auth()->logout();
        return back();
    }
}
