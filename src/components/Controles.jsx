const Controles = ({ onCambiarUnidad, onCambiarClima, onResetClima }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
            <button onClick={onResetClima}>Reiniciar clima</button>
        </div>
    )
}

export default Controles