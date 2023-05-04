import { Celda } from "./Celda";
import { TURNS } from "../logic/constants";

export const TurnoActual = ({ turno }) => {
  return (
    <div className="turn">
      <Celda isColored={turno === TURNS.X}>{TURNS.X}</Celda>
      <Celda isColored={turno === TURNS.O}>{TURNS.O}</Celda>
    </div>
  );
};
