<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GameRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "firstPlayer" => ["required"],
            "secondPlayer" => ["required"],
            "boardSize" => ["required", "gte:3", "lte:10"]
        ];
    }

    public function messages()
    {
        return [
            "firstPlayer.required" => "First Player Name field is required",
            "secondPlayer.required" => "Second Player Name field is required",
            "boardSize.required" => "Board Size Field is required",
            "boardSize.min_digits" => "Board Size field can not be less than 3",
            "boardSize.max_digits" => "Board Size field can not be greater than 10"
        ];
    }
}
