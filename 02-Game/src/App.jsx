import { useState } from "react";
import "./App.css";
import { Celda } from "./components/Square";
import { TURNS, WINNER_COMBOS } from "./logic/constants";


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turnoActual, setTurnoActual] = useState(null)
  
  const clickCelda = (nroCelda) => {
    if (board[nroCelda] != null) return
    
    const newBoard = [...board];
    newBoard[nroCelda] = turnoActual;
    setBoard(newBoard);
    
    const nuevoTurno = (turnoActual == TURNS.X) ? TURNS.O : TURNS.X
    setTurnoActual(nuevoTurno);    
  }
  
  return (
    <main className="board">
    <h1>Tic Tac Toe</h1>
    <section className='game'>
    { 
      board.map((valorCelda, index) => (
        <Celda
          key={index}
          numero={index}
          funcionClick={clickCelda}>   
         {valorCelda || '-'}      
         </Celda>
      ))
    }
    </section>
  </main>
  );
}

export default App;
