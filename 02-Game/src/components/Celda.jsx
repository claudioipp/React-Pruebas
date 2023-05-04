export const Celda = ({
  children,
  isSelected,
  isColored,
  numero,
  funcionClick,
}) => {
  const clases =
    "square" +
    (isSelected ? " is-selected" : "") +
    (isColored ? " is-colored" : "");

  const clickCelda = () => {
    funcionClick(numero); //Llamo al callback que recibi x parametro
  };

  return (
    <div className={clases} onClick={clickCelda}>
      {children}
    </div>
  );
};
