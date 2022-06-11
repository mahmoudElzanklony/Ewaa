<?php

namespace App\Http\Controllers;

use App\Keywords\SearchPageKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchFilterController extends Controller
{
    //
    public function index(){
        return Inertia::render('search_page_filters',[
            'keywords'=>SearchPageKeywords::get_keywords()
        ]);
    }
}
