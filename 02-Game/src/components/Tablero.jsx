import { Celda } from "./Celda";

export const Tablero = ({ tablero, celdasDestacadas, funcionClickCelda }) => {
  return (
    <section className="game">
      {tablero.map((valorCelda, index) => (
        <Celda
          key={index}
          numero={index}
          isColored={celdasDestacadas && celdasDestacadas.includes(index)}
          funcionClick={funcionClickCelda}
        >
          {valorCelda}
        </Celda>
      ))}
    </section>
  );
};
