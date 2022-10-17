<?php

namespace App\Repositories;

use App\Contracts\BaseContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class BaseRepository implements BaseContract
{
    protected Model $model;
    public array $relations = [];

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all(array $options = []): Collection
    {
        $defaults = [
            "columns" => ['*'],
            "where"   => [],
            "orderBy" => "updated_at",
            "sortBy"  => "desc"
        ];

        $options = array_merge($defaults, $options);
        return $this->model->where($options['where'])->orderBy($options['orderBy'], $options['sortBy'])->get($options['columns']);
    }

    public function paginate(array $options = [])
    {
        $defaults = [
            'with'    => [],
            'where'   => [],
            'orderBy' => 'updated_at',
            'sortBy'  => 'desc',
            'limit'   => 10,
        ];

        $options = array_merge($defaults, $options);
        extract($options);

        if (!empty($with)) {
            return $this->model->with($with)->where($where)->orderBy($orderBy, $sortBy)->paginate($limit);
        }

        return $this->model->where($where)->orderBy($orderBy, $sortBy)->paginate($limit);
    }

    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    public function findOrFailById(int $id): ?Model
    {
        return $this->model->with($this->relations)->findOrFail($id);
    }

    public function findById(int $id): ?Model
    {
        return $this->model->with($this->relations)->find($id);
    }

    public function setRelations($relations): void
    {
        is_array($relations) ? $this->relations = $relations : array_push($this->relations, $relations);
    }
}
