<?php


namespace App\Services\listings;


class detect_payment_client_ways
{
    public static function get_client_payment($type){
        if($type == 'rent'){
            $ways = ['one_payment','two_payments','three_payments','four_payments'];
        }else if($type == 'sale'){
            $ways = ['cash','installment'];
        }else{
            abort(503,trans('errors.unauthorized'));
        }
        if(isset($ways)){
            return $ways;
        }
    }
}
