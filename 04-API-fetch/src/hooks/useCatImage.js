import { useEffect, useState } from "react";

const CAT_IMG_BASE = "https://cataas.com/";
const CAT_ENDPOINT_IMG = "https://cataas.com/cat/says/";

export function useCatImage ({frase}) {
    const [imgMeme, setImgMeme] = useState();

    //recupera una imagen cada vez que cambia la frase
    useEffect(() => {
        if (!frase) return;
        console.log('USE EFFECT: ' + frase)
        const fraseBreve = frase?.split(" ", 3).join(" "); //Armo una frase breve con las 3 primeras palabras

        fetch(`${CAT_ENDPOINT_IMG}${fraseBreve}?json=true`)
        .then((resp) => resp.json())
        .then((resp) => setImgMeme(resp.url));
    }, [frase]);

    return { 
         imageURL: `${CAT_IMG_BASE}${imgMeme}`
    }
}