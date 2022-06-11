<?php

namespace App\Http\Controllers;

use App\Keywords\SalesKeywords;
use App\Keywords\SearchPageKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleController extends Controller
{
    //
    public function index(){
        return Inertia::render('sales',[
           'keywords'=>SalesKeywords::get_keywords(),
           'search_keywords'=>SearchPageKeywords::get_keywords(),
        ]);
    }
}
