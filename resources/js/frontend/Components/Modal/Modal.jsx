import React, { useState } from "react";
import ReactDOM from "react-dom";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return {
        isOpen,
        openModal,
        closeModal,
    };
};

const Modal = ({ isOpen, content, closeIcon, closeModal, playAgain }) => {
    return (
        isOpen &&
        ReactDOM.createPortal(
            <div
                className="modal fade show"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
                onClick={() => closeModal()}
                style={{ display: isOpen ? "block" : "" }}
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-xl"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="modal-content">
                        <div className="modal-body">{content}</div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-danger px-4"
                                data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal"
                                onClick={() => closeModal()}
                            >
                                Close The Game
                            </button>
                            <button
                                className="btn btn-primary px-4"
                                data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal"
                                onClick={() => playAgain()}
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        )
    );
};

export { Modal, useModal };
