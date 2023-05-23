import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";
const CAT_IMG_BASE = "https://cataas.com/";
const CAT_ENDPOINT_IMG = "https://cataas.com/cat/says/";

export const App = () => {
  const [frase, setFrase] = useState();
  const [fraseBreve, setFraseBreve] = useState();
  const [imgMeme, setImgMeme] = useState();

  const GenerarMeme = async () => {
    try {
      //Recupero una frase del API 1
      let resp = await fetch(CAT_ENDPOINT_FACT);
      resp = await resp.json();
      setFrase(resp.fact);

      //Genero la frase breve (si es mas larga de 20 caracteres, tomo las primeras 3 palabras)
      let fraseBreve = resp.fact;
      if (resp.length > 20) fraseBreve = fraseBreve.split(" ", 3).join(" ");
      setFraseBreve(fraseBreve);
    } catch (ex) {
      console.error("Error al obtener frase: ", ex);
    }
  };

  useEffect(() => {
    if (!fraseBreve) return;

    fetch(`${CAT_ENDPOINT_IMG}${fraseBreve}?json=true`)
      .then((resp) => resp.json())
      .then((resp) => setImgMeme(resp.url));
  }, [fraseBreve]);

  return (
    <main>
      <h1>Frases de gatitos</h1>

      <button onClick={GenerarMeme}>Generar meme</button>
      {frase && (
        <section>
          <div className="frase">{frase}</div>
          {imgMeme && (
            <img
              src={CAT_IMG_BASE + imgMeme}
              alt={`Imagen aleatorea de un gatito con la frase ${fraseBreve}`}
            />
          )}
        </section>
      )}
    </main>
  );
};
