import { useState } from "react";

////A seguir, você adicionará a função onSquareClick às props do componente Square:
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    //12
    if (calculateWinner(squares) || squares[i]) {
      return;
    } //15 - Squares | //16 - CalculateWinner
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X"; //13
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares); //10
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    //18
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  //07
  const [history, setHistory] = useState([Array(9).fill(null)]); //08
  const [currentMove, setCurrentMove] = useState(0); //22
  const xIsNext = currentMove % 2 === 0; //26
  //  const currentSquares = history[history.length - 1]; //08
  const currentSquares = history[currentMove]; //25

  function handlePlay(nextSquares) {
    //12
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; //24
    setHistory(nextHistory); //24
    setCurrentMove(nextHistory.length - 1); //24
  }

  function jumpTo(nextMove) {
    //23 - //26
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    //19
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      //21 - Key = Move
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  //17
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
