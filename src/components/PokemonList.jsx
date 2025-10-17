import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, incrementOffset } from "../redux/slices/pokemonSlice";
import "../styles/Pokemons.css";

function PokemonList() {
	const dispatch = useDispatch();
	const { list, offset, status, error } = useSelector((state) => state.pokemon);

	// Carga inicial al cargar componente
	useEffect(() => {
		if (list.length === 0) {
			dispatch(fetchPokemons({ limit: 20, offset: 0 }));
		}
	}, [dispatch, list.length]);

	// Aca incrementamos el offset y pedimos más Pokémon
	const handleLoadMore = () => {
		const newOffset = offset + 20;
		dispatch(incrementOffset()); // Actualiza el estado
		dispatch(fetchPokemons({ limit: 20, offset: newOffset })); // Trae los siguientes 20
	};

	return (
		<>
			<div className="pokemon-container">
				{list.map((poke) => (
					<div key={poke.id} className="pokemon-card">
						<h3 className="pokemon-card-text">
							{poke.name} #{poke.id}
						</h3>
						<img
							className="pokemon-image"
							src={poke.sprites.other["official-artwork"].front_default}
							alt={poke.name}
						/>
						<p>
							<strong></strong>{" "}
							{poke.types.map((t, i) => (
								<span key={i} className={`btn-type-card ${t.type.name}`}>
									{t.type.name}
								</span>
							))}
						</p>
						<p>
							<strong>Peso:</strong> {poke.weight / 10} kg
						</p>
						<p>
							<strong>Altura:</strong> {poke.height / 10} m
						</p>
						<p>
							<strong>Habilidad:</strong>{" "}
							<span className="pokemon-card-text">
								{poke.abilities[0]?.ability.name}
							</span>
						</p>
					</div>
				))}
			</div>
			<button className="btn-load" onClick={handleLoadMore}>
				Cargar más
			</button>
		</>
	);
}

export default PokemonList;
