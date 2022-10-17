<?php

namespace App\Repositories;

use App\Contracts\GameHistoryContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class GameHistoryRepository extends BaseRepository implements GameHistoryContract
{
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
