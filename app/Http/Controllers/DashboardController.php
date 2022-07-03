<?php

namespace App\Http\Controllers;

use App\Handling_Data\dashboard\categories_dashboard;
use App\Handling_Data\dashboard\statistics_dashboard;
use App\Handling_Data\dashboard\sub_categories_dashboard;
use App\Keywords\dashboard\CategoriesKeywords;
use App\Keywords\dashboard\IndexKeywords;
use App\Keywords\dashboard\SubCategoriesKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index(){
        return Inertia::render('dashboard/index',[
            'keywords'=>IndexKeywords::get_keywords(),
        ]);
    }

    public function notifications(){
        return Inertia::render('dashboard/notifications',[
            'keywords'=>[
                'notifications'=>trans('keywords.notifications'),
            ]
        ]);
    }

    public function users(){
        return Inertia::render('dashboard/users',[
            'keywords'=>[
                'main_title'=>trans('keywords.users_statics'),
                'update_user'=>trans('keywords.update_user'),
                'upload_image'=>trans('keywords.upload_image'),
            ],
            'handling_data'=>statistics_dashboard::handle_data(),
        ]);
    }

    public function categories(){
        return Inertia::render('dashboard/categories',[
            'keywords'=>[
                'main_title'=>trans('keywords.categories_info'),
            ],
            'handling_data'=>categories_dashboard::handle_data(),
        ]);
    }


    public function sub(){
        return Inertia::render('dashboard/sub_categories',[
            'keywords'=>SubCategoriesKeywords::get_keywords(),
            'handling_data'=>sub_categories_dashboard::handle_data(),
        ]);
    }
}
