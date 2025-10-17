import { useEffect, useState } from "react";
import "./PokemonFetch.css";

function PokemonFetch() {
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const limit = 20;

	useEffect(() => {
		async function fetchPokemons() {
			try {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
				);
				const data = await res.json();

				// Obtener detalles de cada Pokémon individual
				const detailedPromises = data.results.map(async (pokemon) => {
					const res = await fetch(pokemon.url);
					return await res.json();
				});

				const detailedPokemons = await Promise.all(detailedPromises);
				setPokemons((prev) => [...prev, ...detailedPokemons]);
			} catch (error) {
				console.error("Error al cargar Pokémon:", error);
			}
		}

		fetchPokemons();
	}, [offset]);

	const handleLoadMore = () => {
		setOffset((prev) => prev + limit);
	};

	return (
		<div className="pokemon-grid">
			{pokemons.map((poke) => (
				<div key={poke.id} className="pokemon-card">
					<h3>
						#{poke.id} {poke.name}
					</h3>
					<img
						src={poke.sprites.other["official-artwork"].front_default}
						alt={poke.name}
					/>
					<p>
						<strong>Tipo:</strong>{" "}
						{poke.types.map((t) => t.type.name).join(", ")}
					</p>
					<p>
						<strong>Peso:</strong> {poke.weight / 10} kg
					</p>
					<p>
						<strong>Altura:</strong> {poke.height / 10} m
					</p>
					<p>
						<strong>Habilidad:</strong> {poke.abilities[0]?.ability.name}
					</p>
				</div>
			))}
			<button className="btn-load" onClick={handleLoadMore}>
				Cargar más
			</button>
		</div>
	);
}

export default PokemonFetch;
