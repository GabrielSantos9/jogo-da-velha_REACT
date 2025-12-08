import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null); //2

  function handleClick() { //2
    setValue('X'); 
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
    <div className="main">
      <h1>JOGO DA VELHA</h1>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
    </>
  );
}