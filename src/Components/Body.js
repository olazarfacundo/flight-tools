import React from "react";

export default function Body(props) {
  return (

    <div className={props.modoOscuro ? "contenedor-inicio" : "contenedor-inicio"}>
      <h1>Flight Tools</h1>

      <h2>De que se trata?</h2>

      <p>
        Flight Tools es una pagina simple con varias herramientas utiles a la
        hora de planificar un vuelo. Es totalmente <b>gratis</b> y cualquiera
        puede usarla. No importa si sos alumno o hasta piloto comercial, si
        volas en avion, helicoptero o incluso planeador. Estas herramientas van
        a ser utiles para vos.
      </p>

      <p>Te invito a que la uses y la compartas si te parecio util!</p>

      <p>
        En el apartado "Acerca de" podes encontrar un poquito mas de informacion
        sobre esta pagina.
      </p>
    </div>

  );
}
