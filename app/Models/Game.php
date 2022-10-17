<?php

namespace App\Models;

use App\Enum\GameStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        "title", "board_size", "first_player_name", "second_player_name", "token"
    ];

    public function round()
    {
        return $this->hasOne(GameRound::class);
    }

    public function history()
    {
        return $this->hasMany(GameHistory::class)->with("game");
    }

    public function getFirstPlayerWin()
    {
        $history = $this->history;
        if (!empty($history)) {
            $winRate = $history->reduce(function ($total, $h) {
                return $total = $h->winner == $h->game->first_player_name ? $total + 1 : $total + 0;
            }, 0);
        }

        return $winRate;
    }

    public function getSecondPlayerWin()
    {
        $history = $this->history;
        if (!empty($history)) {
            $winRate = $history->reduce(function ($total, $h) {
                return $total = $h->winner == $h->game->second_player_name ? $total + 1 : $total + 0;
            }, 0);
        }
        return $winRate;
    }

    public function countTotalDraw()
    {
        $history = $this->history;
        if (!empty($history)) {
            return $this->history->where("status", GameStatus::DRAW->value)->count();
        }
    }
}
