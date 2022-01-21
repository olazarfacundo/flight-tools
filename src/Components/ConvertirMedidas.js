import React, {useState} from "react"
import Velocidad from "./Velocidad"
import Longitud from "./Longitud"
import Masa from "./Masa"
import Volumen from "./Volumen"
import Tiempo from "./Tiempo"
import Presion from "./Presion"

export default function ConvertirMedidas(props) {

    const medidas = ["Velocidad", "Longitud", "Masa", "Volumen", "Tiempo", "Presion"]

    const [mostrar, setMostrar] = useState("Velocidad")

    const selectMedidas = medidas.map(e => {
        return <option key={e}>{e}</option>
    })

    function toggleModal() {
        props.set(prev => !prev)
    }

    console.log(props)


    function desplegar(){
        console.log(mostrar)
        if(mostrar === "Velocidad"){
          return <Velocidad/>
        }else if(mostrar === "Longitud"){
          return <Longitud/>
        }else if(mostrar === "Masa"){
          return <Masa/>
        }else if(mostrar === "Volumen"){
            return <Volumen/>
        }else if(mostrar === "Tiempo"){
            return <Tiempo/>
        }else{
            return <Presion/>
        }
      }  

    return (
        <div className={props.modoOscuro ? "modal-fondo-claro" : "modal-fondo-herramienta"}>
            <div className={props.modoOscuro ? 'contenedor-herramientas oscuro' : 'contenedor-herramientas'}>
                <div className="modal-header-button">
                    <button id="cerrarModalConvertir" onClick={toggleModal}>Cerrar</button>
                </div>
                <div className="modal-header">
                    <div className="modal-header-select">
                        <select onChange={(event) => setMostrar(event.target.value)}>
                            {selectMedidas}
                        </select>
                        {desplegar()}
                    </div>
                </div>

            </div>

        </div>
    )

}
