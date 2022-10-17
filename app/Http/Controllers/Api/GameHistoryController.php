<?php

namespace App\Http\Controllers\Api;

use App\Contracts\GameHistoryContract;
use App\Enum\GameStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\GameHistoryRequest;
use Illuminate\Http\Request;

class GameHistoryController extends Controller
{

    protected GameHistoryContract $history;

    public function __construct(GameHistoryContract $history)
    {
        $this->history = $history;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GameHistoryRequest $request)
    {
        $history = $this->history->store([
            "game_id" => $request->get("game_id"),
            "winner" => $request->get("winner"),
            "looser" => $request->get("looser"),
            "status" => $request->get("status"),
            "game_round" => $request->get("game_round"),
        ]);

        return response()->json(["data" => $history, "status" => "success"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
