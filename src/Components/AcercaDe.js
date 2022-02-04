import React from "react"

export default function AcercaDe(props){

    function toggleModal(){
        props.set(prev => !prev)
    }

    return(
        <div className={props.modoOscuro ? "modal-fondo-claro" : "modal-fondo"}>
        <div className={props.modoOscuro ? "modal-contenedor oscuro" : "modal-contenedor"}>
            <div className="modal-acerca-header">
                <div className="modal-header-button">
                    <button onClick={toggleModal}>Cerrar</button>
                </div>
                <h1>Acerca de <br/> Flight Tools</h1>
            </div>

            <div className="modal-acerca-cuerpo">
                <p>Flight Tools no tiene ningun derecho registrado ni nada parecido.</p>

                <p>
                    Todo el codigo que forma a esta pagina es totalmente publico y lo podes encontrar en 
                    <a href="https://github.com/olazarfacundo" target="_blank" rel="noopener noreferrer"> <b>github.com/olazarfacundo</b></a>
                </p>

                <p>
                    Para cualquier consulta podes contactarte conmigo a
                    <a href="mailto:olazar.facundo@gmail.com" target="_blank"> <b>olazar.facundo@gmail.com</b></a>
                </p>

            </div>
        </div>
    </div>
    )
}