<?php

namespace App\Providers;

use App\Contracts\GameContract;
use App\Contracts\GameHistoryContract;
use App\Contracts\GameRoundContract;
use App\Repositories\GameHistoryRepository;
use App\Repositories\GameRepository;
use App\Repositories\GameRoundRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        GameContract::class => GameRepository::class,
        GameRoundContract::class => GameRoundRepository::class,
        GameHistoryContract::class => GameHistoryRepository::class,
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        foreach ($this->repositories as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
