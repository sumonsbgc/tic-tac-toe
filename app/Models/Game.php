<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        "title", "board_size", "first_player_name", "second_player_name", "token"
    ];

    public function token(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value,
            set: fn ($value) => bcrypt($this->first_player_name . "-" . $this->second_player_name),
        );
    }

    public function round()
    {
        return $this->hasOne(GameRound::class);
    }

    public function history()
    {
        return $this->hasMany(GameHistory::class);
    }
}
