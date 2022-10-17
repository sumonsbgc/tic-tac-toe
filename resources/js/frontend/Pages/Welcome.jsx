import React, { useState } from "react";
import GameInformation from "../Components/GameInformation";

const Welcome = () => {
    const [modal, displayModal] = useState(false);

    return (
        <div className="welcome-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                    <h1>Welcome To Tic Toc Toe Game</h1>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => displayModal(!modal)}
                        >
                            {modal ? "Remove" : "Add"} Game Information
                        </button>
                    </div>
                </div>
            </div>
            {modal ? (
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-7">
                        <GameInformation />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Welcome;
