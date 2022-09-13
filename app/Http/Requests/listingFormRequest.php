<?php

namespace App\Http\Requests;

use App\Services\listings\detect_payment_client_ways;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class listingFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function listing_inlize(){
        return [
            'category_id'=>'required|exists:categories,id',
            'area_id'=>'required|exists:areas,id',
            'rent_or_sale'=>['required',Rule::in(['sale','rent'])],
        ];
    }

    public function api_save(){
        return [
            'category_id'=>'required|exists:categories,id',
            'area_id'=>'required|exists:areas,id',
            'ar_name'=>'required|max:191',
            'en_name'=>'required|max:191',
            'tu_name'=>'nullable',
            'ar_info'=>'required',
            'en_info'=>'required',
            'tu_info'=>'nullable',
            'ar_address'=>'required',
            'en_address'=>'required',
            'tu_address'=>'nullable',
            'rent_or_sale'=>['required',Rule::in(['sale','rent'])],
            'price'=>'required',
            'meters_number'=>'required',
            'youtube_link'=>'nullable',
            'whatapp_status'=>'required',
            'contact_email_status'=>'required',

        ];
    }

    public function rules()
    {
        if(str_contains($this->getRequestUri(),'/save-inilaize')){
            return $this->listing_inlize();
        }else if(str_contains($this->getRequestUri(),'/api')){
            return $this->api_save();
        }
    }

    public function attributes()
    {
        return [
            'category_id'=>trans('keywords.category'),
            'area_id'=>trans('keywords.area'),
            'ar_name'=>trans('keywords.ar_name'),
            'en_name'=>trans('keywords.en_name'),
            'ar_info'=>trans('keywords.ar_info'),
            'en_info'=>trans('keywords.en_info'),
            'ar_address'=>trans('keywords.ar_address'),
            'en_address'=>trans('keywords.en_address'),
            'price'=>trans('keywords.price'),
            'meters_number'=>trans('keywords.meters_number'),
            'youtube_link'=>trans('keywords.youtube_link'),
            'whatapp_status'=>trans('keywords.whatapp_status'),
            'contact_email_status'=>trans('keywords.contact_me_by_email'),
            'rent_or_sale'=>trans('keywords.rent_or_sale'),
        ];
    }
}
