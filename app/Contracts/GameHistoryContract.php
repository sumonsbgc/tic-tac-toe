<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

interface GameHistoryContract
{
    public function list(array $options): ?Collection;
    public function store(array $attributes): Model;
    public function findGameHistoryById(int $id): ?Model;
    public function setRelations($relations);
}
