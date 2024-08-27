import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const MY_POKEMON_COUNT = 6;

const initialState = [];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (
        state.find((pokemon) => {
          return pokemon.id === action.payload.id;
        })
      ) {
        Swal.fire("똑같은 포켓몬 추가 불가");
      } else if (state.length >= MY_POKEMON_COUNT) {
        Swal.fire(`포켓몬은 ${MY_POKEMON_COUNT}개 까지 추가 가능합니다.
        포켓몬 한 개를 삭제 후 추가하세요.`);
      } else {
        state.push(action.payload);
      }
    },

    removePokemon: (state, action) => {
      return state.filter((p) => {
        return p.id !== action.payload.id;
      });
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
