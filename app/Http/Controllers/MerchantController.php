<?php

namespace App\Http\Controllers;

use App\Keywords\merchant\BalanceKeywords;
use App\Models\subscriptions;
use App\Services\balance_points\balance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchantController extends Controller
{
    //
    public function balance(){
        $my_balance = balance::get_balance(auth()->id());
        return  Inertia::render('merchant/balance',[
            'keywords'=>BalanceKeywords::get_keywords(),
            'my_balance'=>$my_balance
        ]);
    }
}
