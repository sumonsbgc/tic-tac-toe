<?php

use App\Contracts\GameHistoryContract;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\GameHistoryController;
use App\Http\Controllers\Api\GameRoundController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource("games", GameController::class);
Route::prefix("games")->group(function () {
    Route::get("{id}", [GameController::class, "show"]);
    Route::post("/store", [GameController::class, "store"]);
    Route::post("history", [GameHistoryController::class, "store"]);
});

Route::prefix("gameround")->group(function () {
    Route::put("update/{id}", [GameRoundController::class, "update"]);
});
