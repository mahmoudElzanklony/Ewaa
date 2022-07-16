<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\auth\AuthServicesControllerApi;


Route::group(['middleware'=>'changeLang'],function (){
    Route::post('/register',[AuthServicesControllerApi::class,'register_post']);



});
