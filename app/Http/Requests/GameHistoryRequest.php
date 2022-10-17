<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GameHistoryRequest extends FormRequest
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
            "game_id" => ["required"],
            "winner" =>  ["nullable", "string"],
            "looser" =>  ["nullable", "string"],
            "status" =>  ["required"],
            "game_round" =>  ["required"],
        ];
    }
}
