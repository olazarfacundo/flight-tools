import React, { useState } from "react"

export default function CalculoMasa() {

    const [kilos, setKilos] = useState()
    const [libras, setLibras] = useState()

    function calcularKilos(event){
        setKilos(event.target.value)
        setLibras(event.target.value * 2.2046)
    }

    function calcularLibras(event){
        setLibras(event.target.value)
        setKilos(event.target.value * 0.4536)
    }

    return (
        <div className='medidas'>
            <form>
            <div>
                <input placeholder='Masa en kilogramos' value={kilos} onChange={calcularKilos}/> <span>KG</span>
            </div>
            <div>
                <input placeholder='Masa en Libras' value={libras} onChange={calcularLibras}/> <span>LB</span>
            </div>
            </form>
        </div>
    )
}
