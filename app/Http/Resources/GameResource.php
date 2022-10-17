<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = "games";

    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "first_player_name" => $this->first_player_name,
            "second_player_name" => $this->second_player_name,
            "board_size" => $this->board_size,
            "round" => new GameRoundResource($this->round),
            "history" => $this->history,
            "first_player_win" => $this->getFirstPlayerWin(),
            "second_player_win" => $this->getSecondPlayerWin(),
            "total_draw" => $this->countTotalDraw(),
            "token" => $this->token,
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
