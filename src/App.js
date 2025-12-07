//O código em 'App.js' cria um componente. No React, um componente é uma peça de código reutilizável a qual representa uma parte de sua interface de usuário. Componentes são usados para renderizar, administrar, e atualizar os elementos de UI na sua aplicação.

//A primeira linha define uma função chamada 'Square'. A palavra-chave do JavaScript 'export' torna essa função acessível fora deste arquivo. O termo 'default' diz aos outros arquivos usando seu código que essa é a função principal em seu arquivo.

//A segunda linha retorna um botão. A palavra-chave 'return' do JavaScript significa que qualquer coisa que venha após ela é retornada como um valor para quem chamar esta função. '<button>' é um elemento JSX. Um elemento JSX é uma combinação de código JavaScript e tags HTML a qual descreve o que você quer exibir. 'className="square"' é uma propriedade do botão ou prop que diz à CSS como estilizar o botão. 'X' é o texto a ser exibido dentro do botão e </button> fecha o elemento JSX para indicar que qualquer conteúdo após isso não deve ser colocado dentro do botão.

function Square({ value }) {
  //1
  function handleClick() {
    console.log('clicou!');
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}

//ANTES DE REFAZER O CÓDIGO, ELE ERA ASSIM:
// export default function Board() {
//   return (
//     <>
//       <div className="board-row">
//         <button className="square">1</button>
//         <button className="square">2</button>
//         <button className="square">3</button>
//       </div>
//       <div className="board-row">
//         <button className="square">4</button>
//         <button className="square">5</button>
//         <button className="square">6</button>
//       </div>
//       <div className="board-row">
//         <button className="square">7</button>
//         <button className="square">8</button>
//         <button className="square">9</button>
//       </div>
//     </>
//   );
// abrir na seta '>'}

/*DEPOIS DE REFAZER O CÓDIGO, ELE FICOU ASSIM:*/
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
