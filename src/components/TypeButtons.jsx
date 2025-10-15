import "../styles/TypeButtons.css";
import { useLocation } from "react-router-dom";

function TypesButtons({typeSelect}){
    const types = [ "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground",
    "flying", "psychic","bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
    
    //Verifica el path para aplicar diferentes estilos dependiendo de la ruta.
    const location = useLocation();
    const isPokemonPage = location.pathname.includes("/pokemons");
    return(
        <div className={`container-buttons ${isPokemonPage ? "pokemons-style" : "home-style"}`}>
            {types.map((type) => (
                <button
                    key={type}
                    className={`btn-type ${type}`}
                    onClick={() => typeSelect?.(type)}
                >
            {type}
        </button>
        ))}
        </div>
    )
}
export default TypesButtons;

// revisar y buscar como recorrer con .map, arreglar los colores del css typebuttons