import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [siguiendo, setSiguiendo] = useState(false);
  const [posicionMouse, setPosicionMouse] = useState({ posX: 0, posY: 0 });

  useEffect(() => {
    console.log(
      `USE EFFECT! - Hubo un cambio en el estado SIGUIENDO -> ${siguiendo}`
    );

    const movimientoPuntero = (event) => {
      console.log(
        `MOVIMIENTO DEL MOUSE -> X: ${event.clientX} | Y: ${event.clientY}`
      );
      document.body.classList.toggle("no-cursor", siguiendo);
      setPosicionMouse({ posX: event.clientX, posY: event.clientY });
    };

    if (siguiendo) window.addEventListener("pointermove", movimientoPuntero);

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      console.log("CLEANUP DEL USE EFFECT");
      window.removeEventListener("pointermove", movimientoPuntero);
      document.body.classList.remove("no-cursor");
    };
  }, [siguiendo]);

  const classPunteroVirtual = "PunteroVirtual" + (siguiendo ? " Activo" : "");
  return (
    <>
      <div
        className={classPunteroVirtual}
        style={{
          transform: `translate(${posicionMouse.posX}px, ${posicionMouse.posY}px)`,
        }}
      ></div>
      
      <button
        className={siguiendo ? "detener" : "iniciar"}
        onClick={() => setSiguiendo(!siguiendo)}
      >
        {siguiendo ? "Detener" : "Iniciar"}
      </button>
    </>
  );
};
