<?php


namespace App\Keywords;


class ListingPostConfirmPaymentKeywords
{
    public static function get_keywords(){
        return [
           'publish_listing'=>trans('keywords.publish_listing'),
           'You_added_listing_in_one_of_our_paid'=>trans('keywords.You_added_listing_in_one_of_our_paid'),
           'for_rent'=>trans('keywords.for_rent'),
           'you_dont_have_enough_balance'=>trans('keywords.you_dont_have_enough_balance'),
           'click_here_to_buy_one_of_our_packages'=>trans('keywords.click_here_to_buy_one_of_our_packages'),
           'pound'=>trans('keywords.pound'),
        ];
    }
}
