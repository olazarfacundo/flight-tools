import React, { useState } from "react"

export default function CalculoPresion() {

    const [bares, setBares] = useState(0)
    const [psi, setPsi] = useState(0)
    const [isa1013, setIsa1013] = useState(0)
    const [isa2992, setIsa2992] = useState(0)
    const [isa760, setIsa760] = useState(0)

    function calcularBares(event) {
        const valorBares = event.target.value
        setBares(valorBares)
        setPsi(valorBares * 14.5038)
        setIsa1013(valorBares * 1000)
        setIsa2992(valorBares * 29.5301)
        setIsa760(valorBares * 750.06)
    }

    function calcularPsi(event){
        const valorPsi = event.target.value
        setPsi(valorPsi)
        setBares(valorPsi * 0.068948)
        setIsa1013(valorPsi * 68.9476)
        setIsa2992(valorPsi * 2.036)
        setIsa760(valorPsi * 51.7151)
    }

    function calcularIsa1013(event){
        const valorIsa1013 = event.target.value
        setIsa1013(valorIsa1013)
        setBares(valorIsa1013 * 0.001)
        setPsi(valorIsa1013 * 0.014504)
        setIsa2992(valorIsa1013 * 0.02953)
        setIsa760(valorIsa1013 * 0.750064)
    }

    function calcularIsa2992(event){
        const valorIsa2992 = event.target.value
        setIsa2992(valorIsa2992)
        setBares(valorIsa2992 * 0.33864)
        setPsi(valorIsa2992 * 0.491153)
        setIsa1013(valorIsa2992 * 33.8638)
        setIsa760(valorIsa2992 * 25.4)
    }

    function calcularIsa760(event){
        const valorIsa760 = event.target.value
        setIsa760(valorIsa760)
        setBares(valorIsa760 * 0.00133322)
        setPsi(valorIsa760 * 0.019337)
        setIsa1013(valorIsa760 * 1.3332)
        setIsa2992(valorIsa760 * 0.03937)
    }

    return (
        <div className='medidas'>
            <form>
                <div>
                    <input placeholder='Bares' value={bares} onChange={calcularBares} /> <span>Bares</span>
                </div>
                <div>
                    <input placeholder='PSI' value={psi} onChange={calcularPsi} /> <span>PSI</span>
                </div>
                <div>
                    <input placeholder='ISA 1013.25 hPa' value={isa1013} onChange={calcularIsa1013} />
                    <span>hPa</span>
                </div>
                <div>
                    <input placeholder='ISA 29.92' value={isa2992} onChange={calcularIsa2992} />
                    <span>inHg</span>
                </div>
                <div>
                    <input placeholder='ISA 760 mm' value={isa760} onChange={calcularIsa760} />
                    <span>mmHg</span>
                </div>
            </form>
        </div>
    )
}