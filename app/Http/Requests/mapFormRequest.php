<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class mapFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ar_name'=>'required|max:199',
            'en_name'=>'required|max:199',
            'tu_name'=>'nullable|max:199',
            'ar_info'=>'required',
            'en_info'=>'required',
            'tu_info'=>'nullable',
            'country_id'=>'nullable|max:199',
            'government_id'=>'nullable|max:199',
            'city_id'=>'nullable|max:199',
        ];
    }

    public function messages()
    {
        return [
            'ar_name'=>trans('keywords.ar_name'),
            'en_name'=>trans('keywords.en_name'),
            'tu_name'=>trans('keywords.tu_name'),
            'ar_info'=>trans('keywords.ar_description'),
            'en_info'=>trans('keywords.en_description'),
            'tu_info'=>trans('keywords.tu_description'),
        ];
    }
}
