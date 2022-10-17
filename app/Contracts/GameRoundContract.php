<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

interface GameRoundContract
{
    public function list(array $options): ?Collection;
    public function store(array $attributes): Model;
    public function findGameRoundById(int $id): ?Model;
    public function updateGameRound(int $id, $attributes);
    public function setRelations($relations);
}
