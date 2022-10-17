<?php

namespace App\Repositories;

use App\Contracts\GameHistoryContract;
use App\Models\GameHistory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class GameHistoryRepository extends BaseRepository implements GameHistoryContract
{
    public function __construct(GameHistory $history)
    {
        parent::__construct($history);
    }
    public function list(array $options): Collection
    {
        return $this->all($options);
    }

    public function store(array $attribute): Model
    {
        return $this->create($attribute);
    }

    public function findGameHistoryById(int $id): ?Model
    {
        return $this->findById($id);
    }
}
