import React , {useState} from "react"

export default function CalculoTiempo(){

    const [horas, setHoras] = useState(0)
    const [minutos, setMinutos] = useState(0)

    function calcularHoras(event){
        const valorHoras = event.target.value
        setHoras(valorHoras)
        setMinutos(valorHoras * 60)
    }

    function calcularMinutos(event){
        const valorMinutos = event.target.value
        setMinutos(valorMinutos)
        setHoras((valorMinutos * 0.0167).toFixed(2))
    }
    
    return(
        <div className='medidas'>
            <form>
            <div>
                <input placeholder='Tiempo en minutos' value={minutos} onChange={calcularMinutos}/> <span>Min</span>
            </div>
            <div>
                <input placeholder='Tiempo en horas (decimal)' value={horas} onChange={calcularHoras}/> <span>HS</span>
            </div>
            </form>
        </div>
    )
}