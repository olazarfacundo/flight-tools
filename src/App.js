import React from "react"
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"

function App(){

  const [modoOscuro, setModoOscuro] = useState(false)
  
  return(
    <div className={modoOscuro ? "oscuro app" : "app"}>
    <Navbar modoOscuro={modoOscuro}/>
    <Body modoOscuro={modoOscuro}/>
    <div className={modoOscuro ? "boton-luz" : "boton-luz-oscuro"} onClick={() => setModoOscuro(prev => !prev)}>
      {modoOscuro ? <FontAwesomeIcon icon={faSun} className="icon"/> : <FontAwesomeIcon icon={faMoon} className="icon"/>}
    </div>
    </div>
  )
}

export default App;
