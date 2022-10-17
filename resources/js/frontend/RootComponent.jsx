import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./Pages/Game";
import Welcome from "./Pages/Welcome";
// import { Footer, Header } from "./partials";

const RootComponent = () => {
    const [playerName, setPlayerName] = useState("");
    const [player2Name, setPlayer2Name] = useState("");

    useEffect(() => {}, []);
    const clickHandler = (e) => {
        e.target.classList.add("x");
    };

    return (
        <div className="container">
            <Routes>
                <Route exeact path="/" element={<Welcome />} />
                <Route exeact path="/game/:id" element={<Game />} />
            </Routes>
        </div>
    );
};
export default RootComponent;
