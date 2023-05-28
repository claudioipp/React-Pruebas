import { useState, useEffect } from "react";
import { getRandomFact } from "../services/getRandomFact";

export function useCatFrase() {
  const [frase, setFrase] = useState();

  //Funcion para obtener una frase al azar
  const GenerarFrase = async () => {
    try {
      const randomFact = await getRandomFact();
      setFrase(randomFact);
    } catch (ex) {
      console.error("Error al obtener frase: ", ex);
    }
  };

  //recupera un meme al cargar la pagina
  useEffect(() => {
    GenerarFrase();
  }, []);

  return { frase, GenerarFrase }; //retorna el estado y la funcion
}
