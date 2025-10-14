import { use, useState } from "react";
import { useEffect } from "react";

function Buscador(){
    const [input, setInput] = useState(0);
    return(
        <>
        <div className="buscador-container">
            <input 
                className="buscador-barra"
                type="text" 
                value={busqueda}
                placeholder="Buscar por nombre o numero de pokemon..."
            />
            
        </div>
        </>
    )
}
export default Buscador;