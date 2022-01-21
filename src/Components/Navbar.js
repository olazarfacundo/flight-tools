import React, { useState } from "react";
import AcercaDe from "./AcercaDe";
import Herramientas from "./Herramientas";

export default function Navbar(props) {
  
  const [herramientas , setHerramientas] = useState(false)
  const [acerca , setAcerca] = useState(false)

  function toggleModal1(){
    setHerramientas(prev => !prev)
  }

  function toggleModal2(){
    setAcerca(prev => !prev)
  }

  console.log(props)

  return (
    <div className="navbar">
      <ul className={props.modoOscuro ? "nav oscuro-nav" : "nav"}>
        <li onClick={toggleModal1}>Herramientas</li>
        <li onClick={toggleModal2}>Acerca de</li>
        <li>Flight Tools</li>
      </ul>
      {herramientas ? <Herramientas mostrar={herramientas} set={setHerramientas} modoOscuro={props.modoOscuro}/> : ""}
      {acerca ? <AcercaDe mostrar={acerca} set={setAcerca} modoOscuro={props.modoOscuro}/> : ""}
    </div>
  );
}
