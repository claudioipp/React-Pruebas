import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";
const CAT_IMG_BASE = "https://cataas.com/";
const CAT_ENDPOINT_IMG = "https://cataas.com/cat/says/";

export const App = () => {
  const [frase, setFrase] = useState();
  const [imgMeme, setImgMeme] = useState();
  const fraseBreve = frase?.split(" ", 3).join(" "); //Armo una frase breve con las 3 primeras palabras

  const GenerarMeme = async () => {
    try {
      //Recupero una frase del API 1
      let resp = await fetch(CAT_ENDPOINT_FACT);
      resp = await resp.json();
      setFrase(resp.fact);
    } catch (ex) {
      console.error("Error al obtener frase: ", ex);
    }
  };

  //recupera un meme al cargar la pagina
  useEffect(() => {
    GenerarMeme()
  }, []);

  //recupera una imagen cada vez que cambia la frase
  useEffect(() => {
    if (!frase) return;

    fetch(`${CAT_ENDPOINT_IMG}${fraseBreve}?json=true`)
      .then((resp) => resp.json())
      .then((resp) => setImgMeme(resp.url));
  }, [frase]);

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
