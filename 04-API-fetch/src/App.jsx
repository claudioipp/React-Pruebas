import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from './hooks/useCatImage.js'
import { getRandomFact }  from "./services/getRandomFact.js"

export const App = () => {
  const [frase, setFrase] = useState();
  const { imageURL } = useCatImage({frase});

  const GenerarMeme = async () => {
    try {
      const randomFact = await getRandomFact();
      setFrase(randomFact);
    } catch (ex) {
      console.error("Error al obtener frase: ", ex);
    }
  };

  //recupera un meme al cargar la pagina
  useEffect(() => {
    GenerarMeme()
  }, []);

  return (
    <main>
      <h1>Frases de gatitos</h1>

      <button onClick={GenerarMeme}>Generar meme</button>
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
