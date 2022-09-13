<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\auth\AuthControllerApi;
use App\Http\Controllers\Api\profile\ProfileControllerApi;
use App\Http\Controllers\Api\UsersControllerApi;
use App\Http\Controllers\Api\listings\ListingsControllerApi;
use App\Http\Controllers\Api\categories\CategoriesControllerApi;
use App\Http\Controllers\Api\notifications\NotificationsControllerApi;
use App\Http\Controllers\Api\packages\PackagesControllerApi;
use App\Http\Controllers\Api\discussions\DiscussionsControllerApi;
use App\Http\Controllers\Api\map\MapDataControllerApi;
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


    // listings
    Route::group(['prefix'=>'/listings'],function(){
       Route::get('/details',[ListingsControllerApi::class,'details']);
       Route::get('/search',[ListingsControllerApi::class,'search']);
       Route::post('/send-email',[ListingsControllerApi::class,'send_email']);
       Route::get('/count-seen-statistics',[ListingsControllerApi::class,'count_seen_statistics']);
       Route::get('/best-users',[ListingsControllerApi::class,'best_users']);
       Route::post('/save',[ListingsControllerApi::class,'save'])->middleware('CheckApiAuth');
       Route::post('/show-number',[ListingsControllerApi::class,'show_number']);
       Route::post('/pay-for-listing',[ListingsControllerApi::class,'pay_listing'])->middleware('CheckApiAuth');
    });

    // categories
    Route::group(['prefix'=>'/categories'],function(){
        Route::get('/main',[CategoriesControllerApi::class,'main']);
        Route::get('/sub',[CategoriesControllerApi::class,'sub']);
        Route::get('/questions',[CategoriesControllerApi::class,'questions_of_category']);
    });

    // notifications
    Route::group(['prefix'=>'/notifications','middleware'=>'CheckApiAuth'],function(){
        Route::post('/',[NotificationsControllerApi::class,'all_notifications']);
        Route::post('/seen',[NotificationsControllerApi::class,'seen']);
    });

    // packages
    Route::group(['prefix'=>'/packages'],function(){
        Route::get('/',[PackagesControllerApi::class,'index']);
        Route::post('/buy',[PackagesControllerApi::class,'buy'])->middleware('CheckApiAuth');
    });

    // discussions
    Route::group(['prefix'=>'/discussions'],function(){
        Route::get('/questions',[DiscussionsControllerApi::class,'questions']);
        Route::get('/answers',[DiscussionsControllerApi::class,'answers']);
        Route::post('/make-question',[DiscussionsControllerApi::class,'make_question'])->middleware('CheckApiAuth');
        Route::post('/make-answer',[DiscussionsControllerApi::class,'make_answer'])->middleware('CheckApiAuth');
        Route::post('/make-react',[DiscussionsControllerApi::class,'make_react'])->middleware('CheckApiAuth');
    });

    // map
    Route::group(['prefix'=>'/map'],function(){
        Route::get('/countries',[MapDataControllerApi::class,'countries']);
        Route::get('/governments',[MapDataControllerApi::class,'governments'])->middleware('CheckApiAuth');
        Route::get('/cities',[MapDataControllerApi::class,'cities'])->middleware('CheckApiAuth');
        Route::get('/areas',[MapDataControllerApi::class,'areas'])->middleware('CheckApiAuth');

    });


});
