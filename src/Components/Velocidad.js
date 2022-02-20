import React, { useEffect, useState } from "react";

export default function CalculoVelocidad() {

    const [kilometros, setKilometros] = useState()
    const [millas, setMillas] = useState()
    const [nudos, setNudos] = useState()

    function calcularKmh(event) {
        const valorKilometros = event.target.value
        setKilometros(valorKilometros)
        setMillas(valorKilometros * 1.609344)
        setNudos(valorKilometros * 1.852)
        console.log(millas,nudos)
    }
    
    function calcularMph(event){
        const valorMillas = event.target.value
        setMillas(valorMillas)
        setKilometros(valorMillas * 1.609344)
        setNudos(valorMillas * 1.150779)
    }
    
    function calcularKts(event){
        const valorNudos = event.target.value
        setNudos(valorNudos)
        setKilometros(valorNudos * 1.852)
        setMillas(valorNudos * 1.150779)
    }

    return (
        <div className='medidas'>
            <form>
                <div>
                    <input placeholder='Velocidad en KM/H' type='text' value={kilometros} onChange={calcularKmh} /> <span>KM/H</span>
                </div>
                <div>
                    <input placeholder='Velocidad en MP/H' type='text' value={millas} onChange={calcularMph} /> <span>MP/H</span>
                </div>
                <div>
                    <input placeholder='Velocidad en KTS' type='text' value={nudos} onChange={calcularKts} /><span>KTS</span>
                </div>
            </form>
        </div>
    )
}
