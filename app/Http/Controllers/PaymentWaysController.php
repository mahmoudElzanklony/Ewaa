<?php

namespace App\Http\Controllers;

use App\Http\traits\messages;
use App\Services\listings\detect_payment_client_ways;
use Illuminate\Http\Request;

class PaymentWaysController extends Controller
{
    //
    public function get_payment_methods(){
        $ways =  detect_payment_client_ways::get_client_payment(request('type'));
        return messages::success_output('',$ways);
    }
}
