<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController as Auth_user_data;
use App\Http\Controllers\Api\CategoriesControllerApi;
use App\Http\Controllers\Api\ProductsControllerApi;
use App\Http\Controllers\Api\OrdersControllerApi;
use App\Http\Controllers\Api\UserControllerApi;
use App\Http\Controllers\Api\SellerDataController;
use App\Http\Controllers\Api\ClientDataController;
use App\Http\Controllers\Api\CheckoutControllerApi;
use App\Http\Controllers\Api\AreaControllerApi;
use App\Http\Controllers\Api\NotificationsControllerApi;
use App\Http\Controllers\Api\ChatControllerApi;
use App\Http\Controllers\Api\PhotosgalaryControllerApi;
use App\Http\Controllers\Api\WalletControllerApi;
use App\Http\Controllers\Api\ColorsControllerApi;
use App\Http\Controllers\Api\StoresControllerApi;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/updateprofile',[UserControllerApi::class,'updateprofile'])->middleware('changeLang','api','CheckApiAuth');

Route::group(['prefix'=>'/auth','middleware'=>['changeLang','api'] ],function (){
    Route::post('/register',[Auth_user_data::class,'register']);
    Route::post('/login',[Auth_user_data::class,'login']);
    Route::post('/sendcode',[Auth_user_data::class,'sendcode']);
    Route::post('/loginbyserial',[Auth_user_data::class,'loginbyserial']);
    Route::post('logout',[Auth_user_data::class,'logout'])->middleware('CheckApiAuth');

});

Route::group(['prefix'=>'/categories','middleware'=>['changeLang','api'] ],function (){
    Route::get('/',[CategoriesControllerApi::class,'index']);
});

Route::group(['prefix'=>'/categories','middleware'=>['changeLang','api'] ],function (){
    Route::get('/',[CategoriesControllerApi::class,'index']);
    Route::get('/cats-with-sub',[CategoriesControllerApi::class,'sub']);
});


Route::group(['prefix'=>'/products','middleware'=>['changeLang','api'] ],function (){
    Route::get('/products-of-cat',[ProductsControllerApi::class,'products']);
    Route::get('/products-of-id',[ProductsControllerApi::class,'specific_product']);
    Route::get('/best-sold',[ProductsControllerApi::class,'best_sold']);
    Route::get('/last-products',[ProductsControllerApi::class,'last_products']);
    Route::get('/best-discount',[ProductsControllerApi::class,'best_discount']);
    Route::post('/search',[ProductsControllerApi::class,'search']);


});


Route::group(['prefix'=>'/products','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){

Route::post('/save-product',[ProductsControllerApi::class,'save_product']);
Route::post('/delete-product',[ProductsControllerApi::class,'delete_product']);
Route::post('/add-delete-fav',[ProductsControllerApi::class,'add_delete_fav']);
Route::get('/all-fav',[ProductsControllerApi::class,'all_fav']);
Route::post('/product-insert-comment',[ProductsControllerApi::class,'product_insert_comment']);
Route::post('/product-delete-comment',[ProductsControllerApi::class,'product_delete_comment']);
});


Route::post('/get-orders-shipment',[ProductsControllerApi::class,'shipment_info'])
    ->middleware('api','CheckApiAuth');


Route::group(['prefix'=>'/orders','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::get('/my-orders',[OrdersControllerApi::class,'index']);
    Route::get('/my-rates',[OrdersControllerApi::class,'my_rates']);
    Route::post('/rate-product',[OrdersControllerApi::class,'rate_product']);
});

Route::get('/userpoints',[UserControllerApi::class,'my_points'])
    ->middleware('changeLang','api','CheckApiAuth');

Route::group(['prefix'=>'/seller-data','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::get('/my-products',[SellerDataController::class,'my_products']);
    Route::get('/my-products-active',[SellerDataController::class,'my_products_active']);
    Route::get('/my-sales-products-orders',[SellerDataController::class,'my_sold_products_orders']);
});


Route::group(['prefix'=>'/checkout','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::post('/validate-promocode',[CheckoutControllerApi::class,'validatePromoCode']);
    Route::post('/payment',[CheckoutControllerApi::class,'payment']);
});

Route::group(['prefix'=>'/areas','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::get('/governates',[AreaControllerApi::class,'governates']);
    Route::get('/cities',[AreaControllerApi::class,'cities']);
    Route::get('/centers',[AreaControllerApi::class,'centers']);
});

Route::group(['prefix'=>'/notifications','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::get('/',[NotificationsControllerApi::class,'index']);
});

Route::group(['prefix'=>'/user-info','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::post('/',[UserControllerApi::class,'info']);
});

Route::group(['prefix'=>'/packages','middleware'=>['changeLang','api'] ],function (){
    Route::get('/',[UserControllerApi::class,'packages']);
});

Route::group(['prefix'=>'/chat','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::get('/unseenmessages',[ChatControllerApi::class,'unseenmessages']);
    Route::get('/allmessages',[ChatControllerApi::class,'allmessages']);
    Route::post('/sendmessages',[ChatControllerApi::class,'sendmessages']);

});

Route::group(['prefix'=>'/galary','middleware'=>['changeLang','api'] ],function (){
    Route::get('/',[PhotosgalaryControllerApi::class,'index']);
});

Route::group(['prefix'=>'/wallet','middleware'=>['changeLang','api','CheckApiAuth'] ],function (){
    Route::post('/',[WalletControllerApi::class,'index']);
    Route::post('/report',[WalletControllerApi::class,'report']);
});

Route::group(['prefix'=>'/stores','middleware'=>['changeLang','api'] ],function (){
    Route::get('/',[StoresControllerApi::class,'index']);
    Route::get('/{id}',[StoresControllerApi::class,'specific_store']);
    Route::post('/filter',[StoresControllerApi::class,'filter']);
});

Route::get('/colors',[ColorsControllerApi::class,'index']);




