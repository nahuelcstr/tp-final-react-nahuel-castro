import "../styles/TypeButtons.css";

function TypesButtons({typeSelect}){
    const types = [ "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground",
    "flying", "psychic","bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
    console.log("Renderizando botones...");
    console.log(types);
    return(
        <div className="container-buttons">
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