<?php

namespace App\Repositories;

use App\Contracts\GameContract;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use App\Models\Game;

class GameRepository extends BaseRepository implements GameContract
{
    public function __construct(Game $game)
    {
        parent::__construct($game);
    }

    public function list(array $options): Collection
    {
        return $this->all($options);
    }

    public function store(array $attribute)
    {
        try {
            $game = $this->create($attribute);
            $game->round()->create(["round" => 1]);
            return $game;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function findGameById(int $id): ?Model
    {
        return $this->findById($id);
    }

    // public function setRelations($relations): void
    // {
    //     is_array($relations) ? $this->relations = $relations : array_push($this->relations, $relations);
    // }
}
