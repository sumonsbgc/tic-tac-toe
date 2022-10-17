<?php

namespace App\Models;

use App\Enum\GameStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        "game_id",
        "winner",
        "looser",
        "status",
        "game_round",
    ];

    protected $cast = [
        "status" => GameStatus::class
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
