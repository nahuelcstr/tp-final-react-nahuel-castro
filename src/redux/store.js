import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice";
// import favoritesReducer from "./slices/favoritesSlice";
// import typesReducer from "./slices/typeSlice";

export const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
		// favorites: favoritesReducer,
		// types: typesReducer,
	},
});
