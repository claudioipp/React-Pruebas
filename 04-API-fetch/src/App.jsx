import "./App.css";
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFrase } from "./hooks/useCatFrase";

export const App = () => {
  const {frase, GenerarFrase} = useCatFrase();
  const { imageURL } = useCatImage({textoImagen: frase});

  return (
    <main>
      <h1>Frases de gatitos</h1>

      <button onClick={GenerarFrase}>Generar meme</button>
      {frase && (
        <section>
          <div className="frase">{frase}</div>
          {imageURL && (
            <img
              src={imageURL}
              alt={`Imagen aleatorea de un gatito con la frase ${frase}`}
            />
          )}
        </section>
      )}
    </main>
  );
};
