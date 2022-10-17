<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GameRoundResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = "rounds";

    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "round" => $this->round,
            "game_id" => $this->game_id,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }

    public function with($request)
    {
        return [
            'status' => 'success'
        ];
    }
}
