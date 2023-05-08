import { useState } from "react";
import { TurnoActual } from "./components/TurnoActual";
import { WinnerModal } from "./components/WinnerModal";
import { checkEndGame, checkWinnerFrom, findBestMove } from "./logic/game";
import { TURNS } from "./logic/constants";
import confetti from "canvas-confetti";
import { Tablero } from "./components/Tablero";
import { lsGet, lsRemove, lsSet } from "./logic/localstorage";

function App() {
  const [board, setBoard] = useState( () => {
      const boardFromStorage = lsGet('board');
      return boardFromStorage || Array(9).fill(null);
  });
  const [turnoActual, setTurnoActual] = useState( () => {
    const turnoFromStorage = lsGet('turno');
    return turnoFromStorage || TURNS.X;
  });
  const [ganador, setGanador] = useState(null);

  const actualizarTablero = (nroCelda) => {
    if (board[nroCelda] != null) return;

    //Actualizo el movimiento en el tablero
    const newBoard = [...board];
    newBoard[nroCelda] = turnoActual;
    setBoard(newBoard);

    //Cambio de turno
    const nuevoTurno = turnoActual == TURNS.X ? TURNS.O : TURNS.X;
    setTurnoActual(nuevoTurno);

    //Guardo en LOCAL STORAGE
    lsSet('board', newBoard);
    lsSet('turno', nuevoTurno);

    // revisar si hay ganador
    // null es que no hay ganador, false es que hay un empate
    const nuevoGanador = checkWinnerFrom(newBoard); //Si acá le paso el status "board", no tengo el último movimiento actualizado
    if (nuevoGanador) {
      confetti();
      setGanador(nuevoGanador);
    } else if (checkEndGame(newBoard)) {
      setGanador(false); //Pongo FALSE en ganador porque no hay mas movimientos (empate)
    } else {
      //if (nuevoTurno == TURNS.O) setTimeout(jugadaIA, 1000);
    }
  };

  const resetGame = () => {
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    setTurnoActual(TURNS.X);
    setGanador(null);

    //Limpio el LOCAL STORAGE
    lsRemove('board', newBoard);
    lsRemove('turno', TURNS.X);
  };

  const jugadaIA = () => {
    const bestMove = findBestMove(board, turnoActual);
    actualizarTablero(bestMove);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <Tablero tablero={board} funcionClickCelda={actualizarTablero} />

      <TurnoActual turno={turnoActual} />
      <button onClick={resetGame}>LIMPIAR</button>
      <button onClick={jugadaIA}>JUGADA IA</button>
      <WinnerModal winner={ganador} board={board} funcionCerrar={resetGame} />
    </main>
  );
}

export default App;
