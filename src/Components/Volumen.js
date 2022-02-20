import React, { useState } from "react"

export default function CalculoVolumen() {

    const [litros, setLitros] = useState()
    const [galones, setGalones] = useState()

    function calcularLitros(event) {
        const valorLitros = event.target.value
        setLitros(valorLitros)
        setGalones(valorLitros * 3.7854)
    }

    function calcularGalones(event) {
        const valorGalones = event.target.value
        setGalones(valorGalones)
        setLitros(valorGalones * 0.264172)
    }

    return (
        <div className='medidas'>
            <form>
                <div>

                    <input placeholder='Galones USA' value={litros} onChange={calcularLitros} /> <span>GAL</span>
                </div>
                <div>
                    <input placeholder='Litros' value={galones} onChange={calcularGalones} /> <span>LT</span>
                </div>
            </form>
        </div>
    )
}
