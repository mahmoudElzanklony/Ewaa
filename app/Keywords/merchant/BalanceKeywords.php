<?php


namespace App\Keywords\merchant;


use Inertia\Inertia;

class BalanceKeywords
{
    public static function get_keywords(){
        return [
            'my_credit'=>trans('keywords.my_credit'),
            'account_number'=>trans('keywords.account_number'),
            'current_balance'=>trans('keywords.current_balance'),
            'charge_credit'=>trans('keywords.charge_credit'),
            'point'=>trans('keywords.point'),
            'amount'=>trans('keywords.amount'),
            'balance'=>trans('keywords.balance'),
            'description'=>trans('keywords.description'),
            'date'=>trans('keywords.date'),
        ];
    }
}
