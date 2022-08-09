<?php

namespace App\Http\Requests;

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
    public function rules()
    {
        if(str_contains($this->getRequestUri(),'/save-inilaize')){
            return $this->listing_inlize();
        }
    }

    public function attributes()
    {
        return [
            'category_id'=>trans('keywords.category'),
            'area_id'=>trans('keywords.area'),
            'rent_or_sale'=>trans('keywords.rent_or_sale'),
        ];
    }
}
