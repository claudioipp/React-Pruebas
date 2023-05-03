export function Celda({children, isSelected, numero, funcionClick}){
    const clases = "square" + (isSelected ? 'is-selected' : '')
    
    const clickCelda = () => {
        funcionClick(numero) //Llamo al callback que recibi x parametro
    }
    
    return (
        <div onClick={clickCelda} className={clases}>
            {children}
        </div>
    )
}