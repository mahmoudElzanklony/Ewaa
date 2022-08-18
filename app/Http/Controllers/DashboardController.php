<?php

namespace App\Http\Controllers;

use App\Handling_Data\dashboard\categories_dashboard;
use App\Handling_Data\dashboard\currencies_dashboard;
use App\Handling_Data\dashboard\map_dashboard;
use App\Handling_Data\dashboard\packages_dashboard;
use App\Handling_Data\dashboard\pointad_dashboard;
use App\Handling_Data\dashboard\questions_dashboard;
use App\Handling_Data\dashboard\reports_dashboard;
use App\Handling_Data\dashboard\statistics_dashboard;
use App\Handling_Data\dashboard\statistics_public_dashboard;
use App\Handling_Data\dashboard\sub_categories_dashboard;
use App\Handling_Data\dashboard\subscriptions_dashboard;
use App\Handling_Data\dashboard\support_dashboard;
use App\Http\Controllers\classes\DashboardServiceClass;
use App\Http\Requests\usersFormRequest;
use App\Keywords\dashboard\CategoriesKeywords;
use App\Keywords\dashboard\IndexKeywords;
use App\Keywords\dashboard\ListingsKeywords;
use App\Keywords\dashboard\StatisticsKeywords;
use App\Keywords\dashboard\SubCategoriesKeywords;
use App\Keywords\DaysKeywords;
use App\Keywords\MonthsKeywords;
use App\Keywords\PackagesKeywords;
use App\Models\categories;
use App\Models\countries;
use App\Models\listings_info;
use App\Models\notifications;
use App\Models\subscriptions;
use App\Models\User;
use App\Services\notifications\pagiante_notifications;
use App\Services\statistics\filter_statistics_admin;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends DashboardServiceClass
{
    //

    public function __construct()
    {
        if(session()->get('type') != 'admin'){
           // return redirect('/')->send();
        }
        // note
        // change-map make this route public for any one not only admin
    }

    public function index(){
        return Inertia::render('dashboard/index',[
            'keywords'=>IndexKeywords::get_keywords(),
            'data'=>[
               'last_listings'=>listings_info::selection()->with('user')
                   ->where('type','=','live')
                   ->orderByDesc('id')->limit(5)->get(),
               'pending_listings'=>listings_info::selection()->with('user')
                   ->where('type','=','pending')
                   ->where('payment_status','=','0')
                   ->orderByDesc('id')->limit(5)->get(),
               'subscriptions'=>subscriptions::query()
                   ->join('packages','subscriptions.package_id','=','packages.id')
                   ->join('users','subscriptions.user_id','=','users.id')
                   ->join('currencies','packages.currency_id','=','currencies.id')
                   ->groupBy('subscriptions.package_id')
                   ->selectRaw('subscriptions.*,count(subscriptions.id) as total_purchases,packages.'.app()->getLocale().'_name as name,users.username,currencies.'.app()->getLocale().'_name as currency_name')
                   ->limit(5)->get(),
               'categories'=>categories::query()
                   ->with(['listings','questions'])
                   ->where('parent_id','!=',null)
                   ->orderByDesc('id')
                   ->limit(5)->get(),
                'statistics'=>filter_statistics_admin::filter_data('listings_infos',intval(date("Y"))),
                'months'=>MonthsKeywords::get_keywords(),
            ],
        ]);
    }

    public function notifications(){
        if(auth()->check()){
            $type = User::query()->with('role')->find(auth()->id())['role']['name'];
        }else{
            $type = '';
        }
        return Inertia::render('dashboard/notifications',[
            'keywords'=>[
                'notifications'=>trans('keywords.notifications'),
            ],
            'data'=>pagiante_notifications::get_notifications(),
            'type'=>$type
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


    public function sub(categories $id){
        return Inertia::render('dashboard/sub_categories',[
            'keywords'=>SubCategoriesKeywords::get_keywords(),
            'handling_data'=>sub_categories_dashboard::handle_data($id->id),
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
            $data = filter_statistics_admin::filter_data(request('type'));

            return Inertia::render('dashboard/specific_statistics', [
                'keywords' => [
                    'main_title'=>trans('keywords.statistics').' '.trans('keywords.'.request('type')),
                    'months'=>MonthsKeywords::get_keywords(),
                ],
                'handling_data' => $data,
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

    public function currencies(){
        return Inertia::render('dashboard/currencies', [
            'keywords' => [
                'main_title'=>trans('keywords.currencies'),
            ],
            'handling_data' => currencies_dashboard::handle_data(),
        ]);
    }

    public function buildings(){
        if(request()->has('id')){
            $id = request('id');
        }else{
            $id = 0;
        }
        return Inertia::render('dashboard/listings', [
            'main_title'=>trans('keywords.listings'),
            'keywords' => ListingsKeywords::get_keywords(),
            'data'=>listings_info::selection()->when($id > 0 ,function($e) use ($id){
                $e->where('user_id','=',$id);
            })->with(['user','category','area'])->get(),
        ]);
    }

    public function map($type){
            $param = [];
            $map_type = explode('/',strtok($_SERVER["REQUEST_URI"], '?'))
            [sizeof(explode('/',strtok($_SERVER["REQUEST_URI"], '?')))-1];

            if(request()->has('country_id')){
                 $param['name'] = 'country_id';
                 $param['value'] = request('country_id');
            }else if(request()->has('government_id')){
                $param['name'] = 'government_id';
                $param['value'] = request('government_id');
            }else if(request()->has('city_id')){
                $param['name'] = 'city_id';
                $param['value'] = request('city_id');
            }else{
                $param['name'] = '';
                $param['value'] = '';
            }
            return Inertia::render('dashboard/map', [
                'main_title'=>trans('keywords.'.$type),
                'handling_data' => map_dashboard::handle_data($param,$map_type),
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

    public function subscriptions(){
        return Inertia::render('dashboard/subscriptions',[
            'main_title'=>trans('keywords.subscriptions'),
            'handling_data' => subscriptions_dashboard::handle_data(),
        ]);
    }

    public function pointad(){
        return Inertia::render('dashboard/pointad',[
            'main_title'=>trans('keywords.pointad'),
            'handling_data' => pointad_dashboard::handle_data(),
        ]);
    }

    public function settings(){
        return Inertia::render('dashboard/settings',[
            'countries'=>countries::selection()->get(),
            'main_title'=>trans('keywords.update_main_info'),
            'keywords'=>[
                'country_id'=>trans('keywords.select_country'),
                'username'=>trans('keywords.username'),
                'email'=>trans('keywords.email'),
                'password'=>trans('keywords.password'),
                'address'=>trans('keywords.address'),
                'phone'=>trans('keywords.phone'),
            ]
        ]);
    }
}
