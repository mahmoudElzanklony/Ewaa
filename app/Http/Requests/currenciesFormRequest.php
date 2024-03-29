<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class currenciesFormRequest extends FormRequest
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
            'ar_name'=>'required',
            'en_name'=>'required',
            'tu_name'=>'nullable',
            'currency_code'=>'required',
            'country_code'=>'required',
            'is_default'=>'required',
        ];
    }

    public function attributes()
    {
        return [
            'ar_name'=>trans('keywords.ar_name'),
            'en_name'=>trans('keywords.en_name'),
            'tu_name'=>trans('keywords.tu_name'),
            'currency_code'=>trans('keywords.currency_code'),
            'country_code'=>trans('keywords.country_code'),
            'is_default'=>trans('keywords.default_currency'),
        ];
    }
}
