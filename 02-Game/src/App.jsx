import { useState } from "react";
import { TurnoActual } from "./components/TurnoActual";
import { WinnerModal } from "./components/WinnerModal";
import { checkEndGame, checkWinnerFrom } from "./logic/game";
import { TURNS } from "./logic/constants";
import confetti from "canvas-confetti";
import { Tablero } from "./components/Tablero";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turnoActual, setTurnoActual] = useState(TURNS.X);
  const [ganador, setGanador] = useState(null);

  const clickCelda = (nroCelda) => {
    if (board[nroCelda] != null) return;

    //Actualizo el movimiento en el tablero
    const newBoard = [...board];
    newBoard[nroCelda] = turnoActual;
    setBoard(newBoard);

    //Cambio de turno
    const nuevoTurno = turnoActual == TURNS.X ? TURNS.O : TURNS.X;
    setTurnoActual(nuevoTurno);

    // revisar si hay ganador
    // null es que no hay ganador, false es que hay un empate
    const nuevoGanador = checkWinnerFrom(newBoard); //Si acá le paso el status "board", no tengo el último movimiento actualizado
    if (nuevoGanador) {
      confetti();
      setGanador(nuevoGanador);
    } else if (checkEndGame(newBoard)) {
      setGanador(false); //Pongo FALSE en ganador porque no hay mas movimientos (empate)
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurnoActual(TURNS.X);
    setGanador(null);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <Tablero tablero={board} funcionClickCelda={clickCelda} />

      <TurnoActual turno={turnoActual} />
      <button onClick={resetGame}>LIMPIAR</button>
      <WinnerModal winner={ganador} board={board} funcionCerrar={resetGame} />
    </main>
  );
}

export default App;
