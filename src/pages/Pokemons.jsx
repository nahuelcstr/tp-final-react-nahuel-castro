import Buscador from "../components/inputBuscar";
import PokemonList from "../components/PokemonList.jsx";
import TypesButtons from "../components/TypeButtons";

function Pokemons() {
	return (
		<div>
			<TypesButtons />
			<PokemonList />
		</div>
	);
}
export default Pokemons;
