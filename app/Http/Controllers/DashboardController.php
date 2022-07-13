<?php

namespace App\Http\Controllers;

use App\Handling_Data\dashboard\categories_dashboard;
use App\Handling_Data\dashboard\map_dashboard;
use App\Handling_Data\dashboard\packages_dashboard;
use App\Handling_Data\dashboard\questions_dashboard;
use App\Handling_Data\dashboard\reports_dashboard;
use App\Handling_Data\dashboard\statistics_dashboard;
use App\Handling_Data\dashboard\statistics_public_dashboard;
use App\Handling_Data\dashboard\sub_categories_dashboard;
use App\Handling_Data\dashboard\support_dashboard;
use App\Keywords\dashboard\CategoriesKeywords;
use App\Keywords\dashboard\IndexKeywords;
use App\Keywords\dashboard\ListingsKeywords;
use App\Keywords\dashboard\StatisticsKeywords;
use App\Keywords\dashboard\SubCategoriesKeywords;
use App\Keywords\DaysKeywords;
use App\Keywords\MonthsKeywords;
use App\Keywords\PackagesKeywords;
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

    public function questions(){
        return Inertia::render('dashboard/questions',[
            'keywords'=>[
                'main_title'=>trans('keywords.questions_categories'),
            ],
            'handling_data'=>questions_dashboard::handle_data(),
        ]);
    }

    public function statistics(){
        if(request()->has('type')) {
            return Inertia::render('dashboard/specific_statistics', [
                'keywords' => [
                    'main_title'=>trans('keywords.statistics').' '.trans('keywords.'.request('type')),
                    'months'=>MonthsKeywords::get_keywords(),
                ],
                'days'=>DaysKeywords::get_keywords(),
                'handling_data' => statistics_public_dashboard::handle_data(),
            ]);
        }else{
            return Inertia::render('dashboard/statistics', [
                'keywords' => StatisticsKeywords::get_keywords(),
                'handling_data' => statistics_public_dashboard::handle_data(),
            ]);
        }
    }

    public function packages(){
        return Inertia::render('dashboard/packages', [
            'keywords' => [
                'main_title'=>trans('keywords.packages'),
                'upload_image'=>trans('keywords.upload_image'),
                'add_specific_price_for_specific_areas'=>trans('keywords.add_specific_price_for_specific_areas'),
            ],
            'handling_data' => packages_dashboard::handle_data(),
        ]);
    }

    public function buildings(){
        return Inertia::render('dashboard/listings', [
            'keywords' => ListingsKeywords::get_keywords(),
        ]);
    }

    public function map($type){
            return Inertia::render('dashboard/map', [
                'main_title'=>trans('keywords.'.$type),
                'handling_data' => map_dashboard::handle_data(),
            ]);
    }

    public function reports(){
        return Inertia::render('dashboard/reports',[
            'main_title'=>trans('keywords.reports'),
            'handling_data' => reports_dashboard::handle_data(),
        ]);
    }

    public function support(){
        return Inertia::render('dashboard/support',[
            'main_title'=>trans('keywords.support'),
            'handling_data' => support_dashboard::handle_data(),
        ]);
    }
}
