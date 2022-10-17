<?php

namespace App\Enum;

enum GameStatus: int
{
    case DRAW = 0;
    case WIN = 1;
    case LOSE = 2;

    function label()
    {
        return match ($this) {
            self::DRAW => 'DRAW',
            self::WIN => 'WIN',
            self::LOSE => 'LOSE'
        };
    }
}
