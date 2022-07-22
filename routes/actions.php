<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\classes\general\GeneralServiceController;

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
    Route::post('/login',[AuthController::class,'login_post']);
    // profile
    Route::group(['prefix'=>'/profile','middleware'=>['auth']],function(){
        Route::post('/update-email-image',[ProfileController::class,'update_email_image']);
        Route::post('/update-password',[ProfileController::class,'update_password']);
        Route::post('/update-personal-data',[ProfileController::class,'update_personal_data']);
        Route::post('/update-company-data',[ProfileController::class,'update_company_data']);
        Route::post('/update-secondary-data',[ProfileController::class,'update_secondary_data']);
        Route::post('/save-note',[ProfileController::class,'save_note']);
    });
    // user
    Route::group(['prefix'=>'/user','middleware'=>['auth']],function(){
        Route::post('/toggle-fav',[UsersController::class,'toggle_fav']);
    });
    // general
    Route::post('/deleteitem',[GeneralServiceController::class,'delete_item']);


});
