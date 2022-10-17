<?php

namespace App\Repositories;

use App\Contracts\GameRoundContract;
use App\Models\GameRound;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class GameRoundRepository extends BaseRepository implements GameRoundContract
{
    public function __construct(GameRound $gameRound)
    {
        parent::__construct($gameRound);
    }

    public function list(array $options): Collection
    {
        return $this->all($options);
    }

    public function store(array $attribute): Model
    {
        return $this->create($attribute);
    }

    public function findGameRoundById(int $id): ?Model
    {
        return $this->findById($id);
    }

    public function updateGameRound(int $id, $attribute)
    {
        $round = $this->findById($id)->increment("round", 1);
        return $round;
    }
}
