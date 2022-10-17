const Board = ({ index, clickHandle }) => {
    return <td onClick={() => clickHandle(index)}>{""}</td>;
};

export default Board;
