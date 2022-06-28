<?php


namespace App\Handling_Data\profile;


class listing_dashboard
{
    public static function handle_data(){
        return
            [
                'live_listings'=>[
                    'text'=>trans('keywords.live_listings_txt_info'),
                    'data'=>[
                        ['id'=>'1','info'=>'listing info 1'],
                        ['id'=>'1','info'=>'listing info 1'],
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ],
                'rejected_listings'=>[
                    'text'=>trans('keywords.rejected_listings_txt_info'),
                    'data'=>[
                        ['id'=>'1','info'=>'listing rejected info 1'],
                        ['id'=>'1','info'=>'listing rejected info 1'],
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_rejected_reasons'=>trans('keywords.listing_rejected_reasons'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ],
                'expired_listings'=>[
                    'text'=>trans('keywords.expired_listings_txt_info'),
                    'data'=>[
                        ['id'=>'1','info'=>'listing expired info 1'],
                        ['id'=>'1','info'=>'listing expired info 2'],
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                    ]
                ],
                'pending_listings'=>[
                    'text'=>trans('keywords.pending_listings_txt_info'),
                    'more_text_info'=>[
                        trans('keywords.pending_listings_txt_info_first'),
                        trans('keywords.pending_listings_txt_info_second'),
                        trans('keywords.pending_listings_txt_info_third'),
                    ],
                    'data'=>[
                        ['id'=>'1','info'=>'listing pending info 1'],
                        ['id'=>'1','info'=>'listing pending info 2'],
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_rejected_reasons'=>trans('keywords.listing_rejected_reasons'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ],
                'deleted_listings'=>[
                    'text'=>trans('keywords.deleted_listings_txt_info'),
                    'data'=>[
                        ['id'=>'1','info'=>'listing deleted info 1'],
                        ['id'=>'1','info'=>'listing deleted info 2'],
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                    ]
                ],
                'draft_listings'=>[
                    'text'=>trans('keywords.draft_listings_txt_info'),
                    'data'=>[
                        ['id'=>'1','info'=>'listing draft info 1'],
                        ['id'=>'1','info'=>'listing draft info 2'],
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ]
            ];
    }
}
