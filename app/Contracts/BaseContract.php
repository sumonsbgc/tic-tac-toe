<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

interface BaseContract
{
    public function all(array $options = []);
    public function paginate(array $options = []);
    public function create(array $attributes);
    public function findById(int $id);
    public function findOrFailById(int $id): ?Model;
    public function setRelations($relation): void;

    // public function update(array $attributes, int $id);
    // public function delete(int $id);
    // public function bulkDelete(array $ids);

    // public function findByColumns(array $data);
    // public function firstOrFailByColumns(array $data);
    // public function getByColumns(array $data);
}
