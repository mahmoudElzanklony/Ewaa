<?php

namespace App\Http\Controllers;

use App\Keywords\NeighboursKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NeighbourhoodController extends Controller
{
    //
    public function index(){
        return Inertia::render('neighbours',[
            'keywords'=>NeighboursKeywords::get_keywords(),
        ]);
    }
}
