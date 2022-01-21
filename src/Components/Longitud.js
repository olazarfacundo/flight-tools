import React, { useState } from "react"

export default function CalculoLongitud() {

    const [metros, setMetros] = useState(0)
    const [kilometros, setKilometros] = useState(0)
    const [millas, setMillas] = useState(0)
    const [millasNauticas, setMillasNauticas] = useState(0)
    const [pies, setPies] = useState(0)

    function calcularMetros(event) {
        const valorMetros = event.target.value
        setMetros(valorMetros)
        setKilometros(valorMetros * 1000)
        setMillas(valorMetros * 0.000621)
        setMillasNauticas(valorMetros * 0.00054)
        setPies(valorMetros * 3.2808)
    }

    function calcularKilometros(event){
        const valorKilometros = event.target.value
        setKilometros(valorKilometros)
        setMetros(valorKilometros * 1000)
        setMillas(valorKilometros * 0.6214)
        setMillasNauticas(valorKilometros * 0.54)
        setPies(valorKilometros * 3280.84)
    }

    function calcularMillas(event){
        const valorMillas = event.target.value
        setMillas(valorMillas)
        setMetros(valorMillas * 1609.34)
        setKilometros(valorMillas * 1.6093)
        setMillasNauticas(valorMillas * 0.869)
        setPies(valorMillas * 5280)
    }

    function calcularMillasNauticas(event){
        const valorMillasNauticas = event.target.value
        setMillasNauticas(valorMillasNauticas)
        setMetros(valorMillasNauticas * 1852)
        setKilometros(valorMillasNauticas * 1.852)
        setMillas(valorMillasNauticas * 1.1508)
        setPies(valorMillasNauticas * 6076.12)
    }

    function calcularPies(event){
        const valorPies = event.target.value
        setPies(valorPies)
        setMetros(valorPies * 0.3048)
        setKilometros(valorPies * 0.000305)
        setMillas(valorPies * 0.000189)
        setMillasNauticas(valorPies * 0.000165)
    }

    return (
        <div className='medidas'>
            <form>
                <div>
                    <input placeholder='Longitud en M' value={metros} onChange={calcularMetros} /> <span>Metros</span>
                </div>
                <div>
                    <input placeholder='Longitud en KM' value={kilometros} onChange={calcularKilometros} /> <span>Kilometros</span>
                </div>
                <div>
                    <input placeholder='Longitud en SM' value={millas} onChange={calcularMillas} />
                    <span> Millas Estatuto</span>
                </div>
                <div>
                    <input placeholder='Longitud en NM' value={millasNauticas} onChange={calcularMillasNauticas} />
                    <span>Millas Nauticas</span>
                </div>
                <div>
                    <input placeholder='Longitud en FT' value={pies} onChange={calcularPies} />
                    <span>Pies</span>
                </div>
            </form>
        </div>
    )
}