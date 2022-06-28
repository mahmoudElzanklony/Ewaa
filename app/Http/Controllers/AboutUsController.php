<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    //
    public function index(){
        return Inertia::render('about_us',[
           'keywords'=>[
               'about_us'=>trans('keywords.about_us')
           ]
        ]);
    }

    public function terms(){
        return Inertia::render('terms',[
            'keywords'=>[
                'terms'=>trans('keywords.terms')
            ]
        ]);
    }
}
