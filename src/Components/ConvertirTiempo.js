import React, {useState , useEffect} from "react"

export default function ConvertirTiempo(props){
    const [tiempoDeVuelo, setTiempoDeVuelo] = useState(0)

    const [velocidadIn, setVelocidadIn] = useState("Velocidad")
    const [distanciaIn, setDistanciaIn] = useState("Distancia")
  
    const [unidadVelocidad, setUnidadVelocidad] = useState("kmh")
    const [unidadDistancia, setUnidadDistancia] = useState("km")
    
    const [velocidadFinal, setVelocidadFinal] = useState(0)
    const [distanciaFinal, setDistanciaFinal] = useState(0)

    function toggleModal() {
        props.set(prev => !prev)
    }
    
    function tomarVelocidad(event) {
      event.preventDefault()
      setVelocidadIn(event.target.value);
    }
  
    useEffect(()=>{
      if (unidadVelocidad === "mph") {
        setVelocidadFinal(velocidadIn * 1.60934)
      } else if (unidadVelocidad === "kts") {
          setVelocidadFinal(velocidadIn * 1.852)
      } else {
          setVelocidadFinal(velocidadIn)
      }
    },[velocidadIn,unidadVelocidad]);
  
    function tomarDistancia(event) {
      event.preventDefault()
      setDistanciaIn(event.target.value);
    }
  
    useEffect(()=>{
      if (unidadDistancia === "mi") {
        setDistanciaFinal(distanciaIn * 1.60934)
      } else if (unidadDistancia === "nm") {
          setDistanciaFinal(distanciaIn * 1.852)
      } else {
          setDistanciaFinal(distanciaIn)
      }
    },[distanciaIn,unidadDistancia]);
  
    useEffect(()=>{
      const resultadoHs = (distanciaFinal / velocidadFinal).toFixed(2)
      const resultadoMins = (resultadoHs * 60).toFixed(2)
      if (resultadoMins === "NaN" || resultadoHs === "NaN") {
          setTiempoDeVuelo("");
      } else {
          setTiempoDeVuelo(`${resultadoHs} HS (${resultadoMins} min)`);
      }
    },[tiempoDeVuelo,distanciaFinal,velocidadFinal])
    
    function manipularVelocidad(event) {
      event.preventDefault()
      setUnidadVelocidad(event.target.value)
    }
  
    function manipularDistancia(event) {
      event.preventDefault()
      setUnidadDistancia(event.target.value)
    }

    return (
        <div className={props.modoOscuro ? "modal-fondo-claro" : "modal-fondo-herramienta"}>
          <div className={props.modoOscuro ? "contenedor-herramientas oscuro" : "contenedor-herramientas"}>
          <div className="modal-header-button">
                    <button onClick={toggleModal}>Cerrar</button>
                </div>
              
              <div>
                  <div>
                      <form>
                          <p>Velocidad</p>
                          <input type='text' name={velocidadIn} value={velocidadIn} placeholder='Velocidad' onChange={tomarVelocidad} />
  
                          <button className={unidadVelocidad === "kmh" ? "botones-herramientas activo" : "botones-herramientas"} value="kmh" onClick={manipularVelocidad}>KM</button>
                          <button className={unidadVelocidad === "mph" ? "botones-herramientas activo" : "botones-herramientas"} value="mph" onClick={manipularVelocidad}>MI</button>
                          <button className={unidadVelocidad === "kts" ? "botones-herramientas activo" : "botones-herramientas"} value="kts" onClick={manipularVelocidad}>KT</button>
                          <p>Distancia</p>
  
                          <input type='text' name={distanciaIn} value={distanciaIn} placeholder='Distancia' onChange={tomarDistancia} />
  
                          <button className={unidadDistancia === "km" ? "botones-herramientas activo" : "botones-herramientas"} value="km" onClick={manipularDistancia}>KM</button>
                          <button className={unidadDistancia === "mi" ? "botones-herramientas activo" : "botones-herramientas"} value="mi" onClick={manipularDistancia}>MI</button>
                          <button className={unidadDistancia === "nm" ? "botones-herramientas activo" : "botones-herramientas"} value="nm" onClick={manipularDistancia}>NM</button>
                      </form>
                  </div>
                  <div>
                      Tiempo estimado de vuelo: {tiempoDeVuelo}
                  </div>
              </div>
          </div>
        </div>
    );
}