import React from "react";

const Boards = ({ handleClick, marks, size }) => {
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
        </React.Fragment>
    );
};

export default Boards;
