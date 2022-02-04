import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScaleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import ConvertirConsumo from "./ConvertirConsumo";
import ConvertirTiempo from "./ConvertirTiempo";
import ConvertirMedidas from "./ConvertirMedidas"

export default function Herramientas(props) {

    const [consumo, setConsumo] = useState(false)
    const [medidas, setMedidas] = useState(false)
    const [tiempo, setTiempo] = useState(false)

    function toggleModal() {
        props.set(prev => !prev)
    }

    function toggle1(){
        setConsumo(prev => !prev)
    }

    function toggle2(){
        setTiempo(prev => !prev)
    }

    function toggle3(){
        setMedidas(prev => !prev)
    }

    return (
        <div className={props.modoOscuro ? "modal-fondo-claro" : "modal-fondo-herramienta"} id="modalFondoHerramientas">
            <div className={props.modoOscuro ? "modal-contenedor oscuro" : "modal-contenedor"} id="modalContenedor">
                <div className="modal-header">
                    <div className="modal-header-button">
                        <button id="cerrarModalHerramientas" onClick={toggleModal}>
                            Cerrar
                        </button>
                    </div>
                    <div className="modal-header-contenido">
                        <div>
                            <h1>Herramientas</h1>
                            <p>
                                Estas son las herramientas que (por ahora) tiene disponible
                                Flight Tools.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="modal-cuerpo">
                    <div className="modal-opciones" onClick={toggle1}>
                        <h2>Consumo de combustible</h2>
                        <p>
                            {" "}
                            <i className="fas fa-gas-pump"></i>
                            <FontAwesomeIcon icon={faGasPump} />
                        </p>
                    </div>

                    <div className="modal-opciones" onClick={toggle2}>
                        <h2>Convertidor de medidas</h2>
                        <p>
                            <i className="fas fa-balance-scale-right"></i>
                            <FontAwesomeIcon icon={faBalanceScaleRight} />
                        </p>
                    </div>

                    <div className="modal-opciones" onClick={toggle3}>
                        <h2>Tiempo estimado de vuelo</h2>
                        <p>
                            <FontAwesomeIcon icon={faPlane} />
                            <i className="fas fa-plane"></i>
                        </p>
                    </div>
                </div>
            </div>
            {consumo ? <ConvertirConsumo mostrar={consumo} set={setConsumo} modoOscuro={props.modoOscuro}/> : ""}
            {medidas ? <ConvertirTiempo mostrar={medidas} set={setMedidas} modoOscuro={props.modoOscuro} /> : ""}
            {tiempo ? <ConvertirMedidas mostrar={tiempo} set={setTiempo} modoOscuro={props.modoOscuro} /> : ""}
        </div>
    );
}