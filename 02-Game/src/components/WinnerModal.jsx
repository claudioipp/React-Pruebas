import { Celda } from "./Celda";
import { Tablero } from "./Tablero";
import { getWinnerCombination } from "../logic/game";

export const WinnerModal = ({ winner, board, funcionCerrar }) => {
  if (winner == null) return;
  const titulo = winner == false ? "Empate" : "Ganador";

  return (
    <section className="winner">
      <div className="text">
        <h2>{titulo}</h2>

        {winner && (
          <>
            <header>
              <Celda isSelected>{winner}</Celda>
            </header>
            <Tablero
              tablero={board}
              celdasDestacadas={getWinnerCombination(board)}
            />
          </>
        )}

        <footer>
          <button onClick={funcionCerrar}>NUEVO JUEGO</button>
        </footer>
      </div>
    </section>
  );
};
