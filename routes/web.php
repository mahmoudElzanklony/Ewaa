<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LangController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SearchFilterController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\NeighbourhoodController;
use App\Http\Controllers\ListingPostController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompoundsController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\AskNeighborsController;
use App\Http\Controllers\MerchantController;
use App\Http\Controllers\DashboardController;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware'=>'changeLang'],function (){
    Route::get('/',[WelcomeController::class,'index']);
    Route::get('/home',[WelcomeController::class,'index']);
    Route::get('/lang/{lang}',[LangController::class,'index']);
    // auth pages
    Route::get('/login',[AuthController::class,'login'])->name('login')->middleware('guest');
    Route::get('/register',[AuthController::class,'register'])->middleware('guest');;
    Route::get('/forget-password',[AuthController::class,'forget_password']);
    Route::get('/new-password',[AuthController::class,'new_password']);
    // search page filter
    Route::get('/search-page-filter',[SearchFilterController::class,'index']);
    // sale properties
    Route::get('/for-sale',[SaleController::class,'index']);
    // neighbour ( prices of properties at cairo )
    Route::get('/neighborhood',[NeighbourhoodController::class,'index']);
    // governments
    Route::get('/neighborhood/{government}',[NeighbourhoodController::class,'governments']);
    Route::get('/neighborhood/{government}/{city}',[NeighbourhoodController::class,'governments_city']);
    // notifications
    Route::get('/notifications',[NotificationsController::class,'index']);
    // post ad
    Route::group(['prefix'=>'/listing'],function(){
        // initialize post
        Route::get('/initialize',[ListingPostController::class,'initialize'])->middleware('auth');
        Route::get('/info',[ListingPostController::class,'info'])->middleware('auth');
        Route::get('/photos',[ListingPostController::class,'photos'])->middleware('auth');
        // details of post
        Route::get('/details',[ListingPostController::class,'details']);
        // confirm payment
        Route::get('/confirm-payment',[ListingPostController::class,'confirm_payment']);
    });

    Route::group(['prefix'=>'/compounds'],function(){
        // compounds page
        Route::get('/',[CompoundsController::class,'index']);
    });

    // profile
    Route::group(['prefix'=>'/profile','middleware'=>'auth'],function(){
        // edit
        Route::get('/edit',[ProfileController::class,'edit']);
        Route::get('/dashboard',[ProfileController::class,'dashboard_listings']);
        Route::get('/statistics',[ProfileController::class,'statistics']);
        Route::get('/favourites',[ProfileController::class,'favourites']);
        Route::get('/notes',[ProfileController::class,'notes']);
    });
    // credit package
    Route::group(['prefix'=>'/credit'],function(){
        // charge
        Route::get('/charge',[PackagesController::class,'charge']);
        Route::get('/charge/package',[PackagesController::class,'package_info']);
    });
    // feedback
    Route::get('/feedback',[FeedbackController::class,'index']);
    // contact us
    Route::get('/contactus',[ContactUsController::class,'index']);
    // about us
    Route::get('/aboutus',[AboutUsController::class,'index']);
    Route::get('/terms',[AboutUsController::class,'terms']);
    // ask neighbours
    Route::group(['prefix'=>'/ask-neighbours'],function(){
        //
        Route::get('/',[AskNeighborsController::class,'index']);
        Route::get('/{id}/answers',[AskNeighborsController::class,'answers']);
    });

    // merchant
    Route::group(['prefix'=>'/merchant'],function(){
        // balance
        Route::get('/balance',[MerchantController::class,'balance']);
    });

    Route::group(['prefix'=>'/dashboard','middleware'=>'auth'],function(){
        Route::get('/',[DashboardController::class,'index']);
        Route::get('/notifications',[DashboardController::class,'notifications']);
        Route::get('/users',[DashboardController::class,'users']);
        Route::get('/categories',[DashboardController::class,'categories']);
        Route::get('/categories/{id}/sub',[DashboardController::class,'sub']);
        Route::get('/questions',[DashboardController::class,'questions']);
        Route::get('/statistics',[DashboardController::class,'statistics']);
        Route::get('/packages',[DashboardController::class,'packages']);
        Route::get('/subscriptions',[DashboardController::class,'subscriptions']);
        Route::get('/currencies',[DashboardController::class,'currencies']);
        Route::get('/buildings',[DashboardController::class,'buildings']);
        Route::get('/map/{type}',[DashboardController::class,'map']);
        Route::get('/reports',[DashboardController::class,'reports']);
        Route::get('/support',[DashboardController::class,'support']);
        Route::get('/pointad',[DashboardController::class,'pointad']);
        Route::get('/settings',[DashboardController::class,'settings']);
    });

});
