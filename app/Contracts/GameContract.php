<?php

namespace App\Contracts;

use Illuminate\Support\Collection;

interface GameContract
{
    public function list(array $options): ?Collection;
    public function store(array $attributes);
    public function findGameById(int $id);
    public function setRelations($relation): void;
}
