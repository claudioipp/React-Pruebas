const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";

export const getRandomFact =  async () => {
    try {
      //Recupero una frase del API 1
      const resp = await fetch(CAT_ENDPOINT_FACT);
      const data = await resp.json();
      console.log(data);
      return data.fact;
    } catch (ex) {
      console.error("Error al obtener frase: ", ex);
    }
  }