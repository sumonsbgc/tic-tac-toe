import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, useModal } from "../../Components/Modal/Modal";
// import { calculateWinner } from "../../helpers/helpers";

const Boards = ({ game, handleClick , marks, size}) => {
    // const navigate = useNavigate();
    // const { openModal, closeModal, isOpen } = useModal();
    // const [turn, setTurn] = useState("");
    // const [marks, setMarks] = useState();
    // const [size, setSize] = useState("");
    // const [winner, setWinner] = useState("");
    // const [pressCount, setPressCount] = useState(0);
    // const [result, setResult] = useState("");
    // const [round, setRound] = useState("");

    // useEffect(() => {
    //     startGame();
    // }, [game, size]);

    // useEffect(() => {
    //     const whoIsWinner = calculateWinner(marks, size);
    //     if (whoIsWinner === "X") {
    //         setWinner(game.first_player_name);
    //         setResult("WIN");
    //         openModal();
    //     } else if (whoIsWinner === "O") {
    //         setWinner(game.second_player_name);
    //         setResult("WIN");
    //         openModal();
    //     } else {
    //         const boardSize = Math.pow(game.size, 2);
    //         if (pressCount === boardSize) {
    //             setResult("DRAW");
    //             openModal();
    //         }
    //     }
    // }, [marks, pressCount]);

    // useEffect(() => {
    //     if (result) {
    //         console.log(result, "I got the result");
    //     }
    // }, [result]);

    // const startGame = (roundNum = null) => {
    //     if (game) {
    //         console.log(game);
    //         let num = Math.pow(game?.board_size, 2);
    //         setTurn(game?.first_player_name);
    //         setRound(roundNum ? roundNum : game?.round?.round);
    //         if (num) {
    //             setMarks(Array(num).fill(""));
    //         }
    //         setSize(game?.board_size);
    //     }
    // };

    // const playAgain = () => {
    //     axios
    //         .post(`gameround/update/${game.round.id}`, {
    //             game_id: game.game_id,
    //             _method: "PUT",
    //         })
    //         .then((res) => {
    //             const { status, rounds } = res.data;
    //             if (status === "success") {
    //                 setWinner("");
    //                 setResult("");
    //                 setMarks("");
    //                 setSize("");
    //                 setTurn("");
    //                 setPressCount(0);
    //             }
    //             closeModal();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             closeModal();
    //         });
    // };

    // const resetGame = () => {
    //     setWinner("");
    //     setResult("");
    //     setMarks("");
    //     setSize("");
    //     setTurn("");
    //     navigate("/");
    // };

    // const handleClick = (index) => {
    //     let lists = [...marks];

    //     if (marks[index] !== "") {
    //         alert("Already it is ticked");
    //         return;
    //     }

    //     setPressCount(pressCount + 1);

    //     if (turn === game.first_player_name) {
    //         lists[index] = "X";
    //         setTurn(game?.second_player_name);
    //     } else {
    //         lists[index] = "O";
    //         setTurn(game?.first_player_name);
    //     }
    //     setMarks(lists);
    // };

    const Board = ({ index, mark, clickHandle }) => {
        return (
            <div
                className={`board border ${marks[index] ? "ticked" : ""}`}
                onClick={clickHandle}
            >
                {mark}
            </div>
        );
    };

    return (
        <React.Fragment>
            {/* {round && <p>Round: {round}</p>} */}
            {/* <div className="d-flex mt-3">
                <h3>Now It's {turn && turn} turn</h3>
            </div> */}
            <div
                style={{
                    gridTemplateColumns: `repeat(${size && size}, 75px)`,
                    gridTemplateRows: `repeat(${size && size}, 75px)`,
                }}
                className="boards"
            >
                {marks &&
                    marks.map((mark, index) => (
                        <Board
                            key={index}
                            index={index}
                            mark={mark}
                            clickHandle={() => handleClick(index)}
                        />
                    ))}
            </div>

            {/* <Modal
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
            /> */}
        </React.Fragment>
    );
};

export default Boards;
