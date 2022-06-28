<?php

namespace App\Http\Controllers;

use App\Keywords\ask\AnswersKeywords;
use App\Keywords\ask\AskNeighborsKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AskNeighborsController extends Controller
{
    //
    public function index(){
        return Inertia::render('questions/ask_neighbors',[
            'keywords'=>AskNeighborsKeywords::get_keywords()
        ]);
    }

    public function answers(){
        return Inertia::render('questions/answers',[
           'keywords'=>AnswersKeywords::get_keywords(),
        ]);
    }
}
