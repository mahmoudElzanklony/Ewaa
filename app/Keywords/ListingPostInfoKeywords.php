<?php


namespace App\Keywords;


class ListingPostInfoKeywords
{
    public static function get_keywords(){
        return [
          'title_in_english'=>trans('keywords.title_in_english'),
          'description_in_english'=>trans('keywords.description_in_english'),
          'title_in_arabic'=>trans('keywords.title_in_arabic'),
          'description_in_arabic'=>trans('keywords.description_in_arabic'),
          'youtube_video_url'=>trans('keywords.youtube_video_url'),
          'advertiser_details'=>trans('keywords.advertiser_details'),
          'phone_number'=>trans('keywords.phone_number'),
          'if_you_want_to_update_the_current_phone_number_please_go_to'=>trans('keywords.if_you_want_to_update_the_current_phone_number_please_go_to'),
          'my_account'=>trans('keywords.my_account'),
          'this_number_has_whatsapp'=>trans('keywords.this_number_has_whatsapp'),
          'contact_me_by_email'=>trans('keywords.contact_me_by_email'),
          'property_details'=>trans('keywords.property_details'),
          'size_in_meters'=>trans('keywords.size_in_meters'),
          'view'=>trans('keywords.view'),
          'price_egp'=>trans('keywords.price_egp'),
          'payment_method'=>trans('keywords.payment_method'),
          'rooms'=>trans('keywords.rooms'),
          'floor'=>trans('keywords.floor'),
          'bathrooms'=>trans('keywords.bathrooms'),
          'building_year'=>trans('keywords.building_year'),
          'finishing_type'=>trans('keywords.finishing_type'),
          'address'=>trans('keywords.address'),
          'property_address'=>trans('keywords.property_address'),
          'mark_your_listing_location'=>trans('keywords.mark_your_listing_location'),
          'next'=>trans('keywords.next'),
        ];
    }
}
