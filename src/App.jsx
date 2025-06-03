import { useState } from 'react'
import './App.css'
import Controles from './components/Controles';
import Display from './components/Display';

function App() {
  const [unidad, setUnidad] = useState('Celsius');
  const [clima, setClima] = useState('Soleado')
  

  const cambiarUnidad = () => {
    setUnidad(unidad === 'Farenheit' ? 'Celsius' : 'Farenheit')
  }

  const cambiarClima = (estado) => {
    setClima(estado)
  }

  const resetClima = () => {
    setUnidad('Celsius')
    setClima('Soleado')
  }

  
  return (
    <div className="container">
      <h1>Estado del tiempo</h1>
      <Controles onCambiarUnidad={cambiarUnidad} onCambiarClima={cambiarClima} onResetClima={resetClima}/>
      <Display unidad={unidad} clima={clima}/>
    </div>
  )
}

export default App
