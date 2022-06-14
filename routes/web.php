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
    Route::get('/lang/{lang}',[LangController::class,'index']);
    // auth pages
    Route::get('/login',[AuthController::class,'login']);
    Route::get('/register',[AuthController::class,'register']);
    Route::get('/forget-password',[AuthController::class,'forget_password']);
    Route::get('/new-password',[AuthController::class,'new_password']);
    // search page filter
    Route::get('/search-page-filter',[SearchFilterController::class,'index']);
    // sale properties
    Route::get('/for-sale',[SaleController::class,'index']);
    // neighbour ( prices of properties at cairo )
    Route::get('/neighborhood',[NeighbourhoodController::class,'index']);
    // governments
    Route::get('/neighborhood/{name}',[NeighbourhoodController::class,'governments']);
    // notifications
    Route::get('/notifications',[NotificationsController::class,'index']);
    // post ad
    Route::group(['prefix'=>'/listing'],function(){
        // initialize post
        Route::get('/initialize',[ListingPostController::class,'initialize']);
        Route::get('/info',[ListingPostController::class,'info']);
        Route::get('/photos',[ListingPostController::class,'photos']);
        // details of post
        Route::get('/details',[ListingPostController::class,'details']);
    });
});
