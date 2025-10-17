import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, incrementOffset } from "../redux/slices/pokemonSlice";
import "../styles/Pokemons.css";

function PokemonList() {
	const dispatch = useDispatch();
	const { list, offset, status, error } = useSelector((state) => state.pokemon);

	useEffect(() => {
		dispatch(fetchPokemons({ limit: 20, offset }));
	}, [dispatch, offset]);

	const handleLoadMore = () => {
		dispatch(incrementOffset());
	};
	console.log(list);

	return (
		<div className="pokemon-grid">
			{list.map((poke) => (
				<div key={poke.id} className="pokemon-card">
					<h3>
						#{poke.id} {poke.name}
					</h3>
					<img
						className="pokemon-image"
						src={poke.sprites.other["official-artwork"].front_default}
						alt={poke.name}
					/>
					<p>
						<strong></strong>{" "}
						{poke.types.map((t) => (
							<span key={t} className={`btn-type-card ${t.type.name}`}>
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

export default PokemonList;
