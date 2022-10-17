import axios from "axios";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const GameInformation = (props) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    const [gameInfo, setGameInfo] = useState({
        firstPlayer: "",
        secondPlayer: "",
        boardSize: 0,
    });
    const inputHandler = (e) => {
        setGameInfo({ ...gameInfo, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("games/store", gameInfo)
            .then((res) => {
                setErrors({});
                const {game, status} = res.data;
                
                navigate(`/game/${game.id}`);

                if (status === "success") {}
            })
            .catch((e) => {
                const { status, statusText, data } = e.response;
                const errs = data.errors;
                let errObj = Object.keys(errs).reduce((errorList, err, ci) => {
                    return {
                        ...errorList,
                        [err]: errs[err][0],
                    };
                }, {});

                setErrors(errObj);
            });
    };

    return (
        <form className="border p-5" onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="firstPlayer" className="form-label">
                    First Player Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="firstPlayer"
                    id="firstPlayer"
                    placeholder="Jhon Doe"
                    value={gameInfo.firstPlayer}
                    onChange={inputHandler}
                />
                {errors?.firstPlayer ? (
                    <span className="text-danger">{errors?.firstPlayer}</span>
                ) : (
                    ""
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="secondPlayer" className="form-label">
                    Second Player Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="secondPlayer"
                    id="secondPlayer"
                    placeholder="Michel Baven"
                    value={gameInfo.secondPlayer}
                    onChange={inputHandler}
                />
                {errors?.secondPlayer ? (
                    <span className="text-danger">{errors?.secondPlayer}</span>
                ) : (
                    ""
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="boardSize" className="form-label">
                    Board Size
                </label>
                <input
                    type="number"
                    className="form-control"
                    name="boardSize"
                    id="boardSize"
                    placeholder="0"
                    min={0}
                    max={101}
                    value={gameInfo.boardSize}
                    onChange={inputHandler}
                />
                {errors?.boardSize ? (
                    <span className="text-danger">{errors?.boardSize}</span>
                ) : (
                    ""
                )}
            </div>
            <div className="mb-3 text-end">
                <input
                    type="submit"
                    className="btn btn-primary w-25 p-2"
                    name="submit"
                    id="submit"
                    value="Add Info"
                />
            </div>
        </form>
    );
};

export default GameInformation;
