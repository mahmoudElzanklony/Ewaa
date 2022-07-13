<?php


namespace App\Keywords\dashboard;


class ListingsKeywords
{
    public static function get_keywords(){
        return [
            'main_title' => trans('keywords.listings'),
            'user_image' => trans('keywords.user_image'),
            'username' => trans('keywords.username'),
            'phone' => trans('keywords.phone'),
            'listing_name' => trans('keywords.listing_name'),
            'category' => trans('keywords.category'),
            'type' => trans('keywords.type'),
            'price' => trans('keywords.price'),
            'approval_status' => trans('keywords.approval_status'),
            'actions' => trans('keywords.actions'),
        ];
    }
}
