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
    Route::post('/register',[AuthController::class,'register_post']);



});
