import { useState } from "react";

//A seguir, você adicionará a função onSquareClick às props do componente Square:
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  //Por fim, você irá definir a função handleClick dentro do componente Board para atualizar o array squares o qual armazena o state de seu tabuleiro:

  //Agora você pode adicionar X’s ao tabuleiro… mas apenas no quadrado superior esquerdo. A sua função handleClick está codificada a atualizar o índice do quadrado superior esquerdo (0). Vamos atualizar handleClick para que seja capaz de atualizar qualquer quadrado. Adicione um argumento i à função handleClick que recebe o índice de qual quadrado atualizar:

  //A cada vez que um jogador fizer um movimento, xIsNext (um booleano) será invertido para determinar qual o próximo jogador e o state do jogo será salvo. Você atualizará a função handleClick de Board para inverter o valor de xIsNext:

  //Quando você marca um quadrado com um X ou um O você não está primeiro checando para ver se o quadrado já possui um valor X ou O. Você pode consertar isso retornando cedo. Você checará para ver se o quadrado já possui um X ou um O. Se o quadrado já estiver preenchido, você chamará return na função handleClick cedo—antes que ela tente atualizar o state do tabuleiro.  //4

  //Você chamará 'calculateWinner(squares)' na função handleClick do componente Board para checar se um jogador venceu. Você pode realizar essa checagem ao mesmo tempo em que checa se um usuário clicou em um quadrado que já possui um X ou um O. Nós gostaríamos de retornar cedo em ambos os casos: //5

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      //5
      //4
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  /* Declarando um vencedor 
  Agora que os jogadores podem trocar de vez, você vai querer exibir quando o jogo for  vencido e não existam mais turnos a fazer. Para fazer isso você adicionará uma função  ajudante chamada calculateWinner a qual recebe um array de 9 quadrados, checa por um   vencedor e retorna 'X', 'O', ou null apropriadamente. Não se preocupe muito com a   função calculateWinner; ela não é específica ao React:
  */

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      //Esses valores não são aleatórios — eles representam todas as combinações possíveis de vitória no jogo da velha
      /*  Horizontais (3)
          Verticais (3)
          Diagonais (2) */
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    //Agora você conectará a prop onSquareClick a uma função no componente Board que você chamará de handleClick. Para conectar a prop onSquareClick a handleClick você passará a função à prop onSquareClick do primeiro componente Square:
    <>
      <div className="main">
        <h1>JOGO DA VELHA</h1>
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
      </div>
    </>
  );
}
