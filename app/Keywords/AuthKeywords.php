<?php


namespace App\Keywords;


class AuthKeywords
{
    public static function get_keywords(){
        return [
            'email'=>trans('keywords.email'),
            'password'=>trans('keywords.password'),
            'username'=>trans('keywords.username'),
            'phone'=>trans('keywords.phone'),
            'address'=>trans('keywords.address'),
            'country'=>trans('keywords.country'),
            'sign_up'=>trans('keywords.sign_up'),
            'sign_in'=>trans('keywords.sign_in'),
            'private_owner'=>trans('keywords.private_owner'),
            'freelancer'=>trans('keywords.freelancer'),
            'coupounded_developer'=>trans('keywords.coupounded_developer'),
            'brokerage_company'=>trans('keywords.brokerage_company'),
            'user_type'=>trans('keywords.user_type'),
            'have_already_account'=>trans('keywords.have_already_account'),
            'forget_password'=>trans('keywords.forget_password'),
            'dont_have_account'=>trans('keywords.dont_have_account'),
        ];
    }
}
