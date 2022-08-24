<?php


namespace App\Keywords\dashboard;


class InterestsKeywords
{
    public static function get_keywords(){
        return [
            'listing_name'=>trans('keywords.listing_name'),
            'username'=>trans('keywords.username'),
            'email'=>trans('keywords.email'),
            'phone'=>trans('keywords.phone'),
            'date'=>trans('keywords.date'),
        ];
    }
}
