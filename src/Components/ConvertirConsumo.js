import React, { useEffect, useState } from "react"

export default function ConvertirConsumo(props) {

    const [consumo, setConsumo] = useState(0)
    const [tiempo, setTiempo] = useState(0)


    const [horas, setHoras] = useState(true)
    const [minutos, setMinutos] = useState(false)


    const [litros, setLitros] = useState(true)
    const [galones, setGalones] = useState(false)


    function toggleModal() {
        props.set(prev => !prev)
    }

    function manejarConsumo(event) {
        const valorConsumo = event.target.value
        setConsumo(valorConsumo)
        console.log(consumo)
    }

    function manejarTiempo(event) {
        const valorTiempo = event.target.value
        setTiempo(valorTiempo)
        console.log(tiempo)
    }

    function selectLitros(event) {
        event.preventDefault()
        setLitros(true)
    }

    function selectGalones(event) {
        event.preventDefault()
        setLitros(false)
    }

    function selectHoras(event) {
        event.preventDefault()
        setHoras(true)
    }

    function selectMinutos(event) {
        event.preventDefault()
        setHoras(false)
    }

    const resultado = tiempo * consumo
    const resultadoMins = ((tiempo * 0.0167) * consumo).toFixed(2)



    return (
        <div className={props.modoOscuro ? "modal-fondo-claro" : "modal-fondo-herramienta"}>
            <div className={props.modoOscuro ? "contenedor-herramientas oscuro" : "contenedor-herramientas"}>
                <div className="modal-header-button">
                    <button id="cerrarModalConsumo" onClick={toggleModal}>Cerrar</button>
                </div>
                <form>
                    <div>
                        <p>Consumo</p>
                        <div className="contenedor-partes">
                            <input type='text' placeholder='Consumo' onChange={manejarConsumo} />
                            <button id='litrosBtn' className={litros ? "activo botones-herramientas" : "botones-herramientas"} onClick={selectLitros}>LT</button>
                            <button id='galonesBtn' className={litros ? "botones-herramientas" : "activo botones-herramientas"} onClick={selectGalones}>GAL</button>
                        </div>
                    </div>
                    <div className="contenedor-partes">
                        <p>Tiempo de vuelo</p>
                        <input type='text' placeholder='Tiempo' onChange={manejarTiempo} />
                        <button id='horasBtn' className={horas ? "activo botones-herramientas" : "botones-herramientas"} onClick={selectHoras}>HS</button>
                        <button id='minutosBtn' className={horas ? "botones-herramientas" : "activo botones-herramientas"} onClick={selectMinutos}>MIN</button>
                    </div>
                    <div className="contenedor-partes">
                        Consumo estimado de vuelo : <span>{horas ? resultado : resultadoMins} {litros ? "Litros" : "Galones"}</span>
                    </div>
                </form>
            </div>


        </div>
    )
}