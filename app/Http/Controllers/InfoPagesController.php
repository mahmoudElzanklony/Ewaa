<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InfoPagesController extends Controller
{
    //
    public function searches(){
        return Inertia::render('info_pages/searches');
    }

    public function sitemap(){
        return Inertia::render('info_pages/sitemap');
    }

    public function jobs(){
        return Inertia::render('info_pages/jobs');
    }

    public function conditions(){
        return Inertia::render('info_pages/conditions');
    }


}
