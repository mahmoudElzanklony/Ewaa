<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\auth\AuthControllerApi;
use App\Http\Controllers\api\profile\ProfileControllerApi;
use App\Http\Controllers\api\UsersControllerApi;
use App\Http\Controllers\classes\general\GeneralServiceController;


Route::group(['middleware'=>'changeLang'],function (){
    Route::post('/register',[AuthControllerApi::class,'register_post']);
    Route::post('/login',[AuthControllerApi::class,'login_api']);

    // profile
    Route::group(['prefix'=>'/profile','middleware'=>['CheckApiAuth']],function(){
        Route::post('/update-email-image',[ProfileControllerApi::class,'update_email_image']);
        Route::post('/update-password',[ProfileControllerApi::class,'update_password']);
        Route::post('/update-company-data',[ProfileControllerApi::class,'update_company_data']);
        Route::post('/update-personal-data',[ProfileControllerApi::class,'update_personal_data']);
        Route::post('/update-secondary-data',[ProfileControllerApi::class,'update_secondary_data']);
        Route::post('/get-favourites',[ProfileControllerApi::class,'get_favs']);
        Route::get('/get-listings',[ProfileControllerApi::class,'get_listings']);
        Route::get('/listings-statistics',[ProfileControllerApi::class,'listings_statistics']);
        Route::get('/notes',[ProfileControllerApi::class,'notes']);
        Route::post('/save-note',[ProfileControllerApi::class,'save_note']);
    });

    // user
    Route::group(['prefix'=>'/user','middleware'=>['CheckApiAuth']],function(){
        Route::post('/toggle-fav',[UsersControllerApi::class,'toggle_fav']);
        Route::post('/delete',[GeneralServiceController::class,'delete_item']);
    });

});
