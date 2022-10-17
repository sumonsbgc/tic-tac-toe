import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { calculateWinner } from "../helpers/helpers";
import Boards from "./GameBoard/Boards";
import { useModal, Modal } from "../Components/Modal/Modal";

const Game = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState({});

    const { openModal, closeModal, isOpen } = useModal();
    const [result, setResult] = useState("");
    const [round, setRound] = useState("");
    const [size, setSize] = useState("");
    const [winner, setWinner] = useState("");
    const [turn, setTurn] = useState("");
    const [marks, setMarks] = useState();
    const [pressCount, setPressCount] = useState(0);

    useEffect(() => {
        axios
            .get(`games/${params.id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "success") {
                    setGame(res.data.games);
                }
            })
            .catch((err) => console.log(err));
    }, [params.id, size]);

    useEffect(() => {
        startGame();
    }, [game]);

    useEffect(() => {
        const whoIsWinner = calculateWinner(marks, size);
        if (whoIsWinner === "X") {
            setWinner(game.first_player_name);
            setResult("WIN");
            openModal();
        } else if (whoIsWinner === "O") {
            setWinner(game.second_player_name);
            setResult("WIN");
            openModal();
        } else {
            const boardSize = Math.pow(game.size, 2);
            if (pressCount === boardSize) {
                setResult("DRAW");
                openModal();
            }
        }
    }, [marks, pressCount]);

    useEffect(() => {
        if (result) {
            axios
                .post("game/history", {
                    game_id: game.id,
                    winner: winner,
                    looser:
                        game?.first_player_name === winner
                            ? winner
                            : game?.second_player_name,
                    status: result,
                    game_round: game.round.round,
                })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
        }
    }, [result]);

    const startGame = (roundNum = null) => {
        if (game) {
            let num = Math.pow(game?.board_size, 2);
            setTurn(game?.first_player_name);
            setRound(roundNum ? roundNum : game?.round?.round);
            if (num) {
                setMarks(Array(num).fill(""));
            }
            setSize(game?.board_size);
        }
    };

    const resetGame = () => {
        setWinner("");
        setResult("");
        setMarks("");
        setSize("");
        setTurn("");
        navigate("/");
    };

    const playAgain = () => {
        axios
            .post(`gameround/update/${game.round.id}`, {
                game_id: game.game_id,
                _method: "PUT",
            })
            .then((res) => {
                const { status, rounds } = res.data;
                if (status === "success") {
                    setWinner("");
                    setResult("");
                    setMarks("");
                    setSize("");
                    setTurn("");
                    setPressCount(0);
                }
                closeModal();
            })
            .catch((err) => {
                closeModal();
            });
    };

    const handleClick = (index) => {
        let lists = [...marks];

        if (marks[index] !== "") {
            alert("Already it is ticked");
            return;
        }

        setPressCount(pressCount + 1);

        if (turn === game.first_player_name) {
            lists[index] = "X";
            setTurn(game?.second_player_name);
        } else {
            lists[index] = "O";
            setTurn(game?.first_player_name);
        }
        setMarks(lists);
    };

    return (
        <React.Fragment>
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-7">
                    <h3 className="display-3">Tic Tac Toe Game</h3>
                    <h3>
                        The Game is playing between {game?.first_player_name} &{" "}
                        {game?.second_player_name}
                    </h3>
                    <h5 className="text-success">Game Round: {round}</h5>
                    <h3 className="text-danger">Score: </h3>
                    <h5>
                        {game?.first_player_name} Win:{" "}
                        <span className="text-primary">0</span> time
                    </h5>
                    <h5>
                        {game?.second_player_name} Win:{" "}
                        <span className="text-primary">0</span> times
                    </h5>
                </div>
                <div className="col-md-5">
                    <div className="d-flex mt-3">
                        <h3>Now It's {turn && turn} turn</h3>
                    </div>
                    {game && (
                        <Boards
                            game={game}
                            handleClick={handleClick}
                            marks={marks}
                            size={size}
                        />
                    )}
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                closeModal={() => {
                    closeModal();
                    resetGame();
                }}
                playAgain={() => playAgain()}
                content={
                    <div className="row mt-3">
                        <div className="col-md-12 text-center">
                            {result === "WIN" && (
                                <>
                                    <h4 className="display-4">
                                        Congratulation!!!
                                    </h4>
                                    <h3>{winner}</h3>
                                    <h5>You have won the game</h5>
                                </>
                            )}
                            {result === "DRAW" && (
                                <>
                                    <h4>The Game is</h4>
                                    <h2 className="display-2">DRAW</h2>
                                    <h5>Both are played well. No One is win</h5>
                                </>
                            )}
                        </div>
                    </div>
                }
            />
        </React.Fragment>
    );
};

export default Game;
