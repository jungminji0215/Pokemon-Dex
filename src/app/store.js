import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemonSlice.js";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
