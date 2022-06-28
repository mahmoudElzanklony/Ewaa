<?php

namespace App\Http\Controllers;

use App\Keywords\compounds\FilterKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompoundsController extends Controller
{
    //
    public function index(){
        return Inertia::render('compounds',[
           'keywords'=>FilterKeywords::get_keywords(),
        ]);
    }
}
