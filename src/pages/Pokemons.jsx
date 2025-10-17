import PokemonList from "../components/PokemonList.jsx";
import TypesButtons from "../components/TypeButtons";
import { Link } from "react-router-dom";

function Pokemons() {
	return (
		<div className="inicio">
			<TypesButtons />
			<PokemonList />
		</div>
	);
}
export default Pokemons;
