import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk(
	"pokemon/fetchPokemons",
	async ({ limit = 20, offset = 0 }) => {
		const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await res.json();

		const detailedPromises = data.results.map(async (pokemon) => {
			const res = await fetch(pokemon.url);
			return await res.json();
		});

		return await Promise.all(detailedPromises);
	}
);

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {
		list: [],
		offset: 0,
		status: "idle",
		error: null,
	},
	reducers: {
		resetPokemons: (state) => {
			state.list = [];
			state.offset = 0;
		},
		incrementOffset: (state) => {
			state.offset += 20;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemons.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchPokemons.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = [...state.list, ...action.payload];
			})
			.addCase(fetchPokemons.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { resetPokemons, incrementOffset } = pokemonSlice.actions;
export default pokemonSlice.reducer;
