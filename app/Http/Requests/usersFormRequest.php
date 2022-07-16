<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class usersFormRequest extends FormRequest
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
            //
            'country_id'=>'required|integer|exists:countries,id',
            'username'=>'required|max:191',
            'email'=>'required|max:191|unique:users,email',
            'password'=>'required|min:7|max:191',
            'phone'=>'required|min:7|integer',
            'address'=>'nullable|max:191',
            'image'=>'nullable|image|mimes:jpg,jpeg,png,gif',
        ];
    }

    public function attributes()
    {
        return [
            'country_id'=>trans('keywords.country'),
            'username'=>trans('keywords.username'),
            'email'=>trans('keywords.email'),
            'password'=>trans('keywords.password'),
            'address'=>trans('keywords.address'),
            'image'=>trans('keywords.image'),
        ];
    }

    public function messages()
    {
        return [

        ];
    }
}
