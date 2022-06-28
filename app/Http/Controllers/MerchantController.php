<?php

namespace App\Http\Controllers;

use App\Keywords\merchant\BalanceKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchantController extends Controller
{
    //
    public function balance(){
        return  Inertia::render('merchant/balance',[
            'keywords'=>BalanceKeywords::get_keywords(),
        ]);
    }
}
