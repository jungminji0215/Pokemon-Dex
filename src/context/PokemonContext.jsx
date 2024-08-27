import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const PokemonContext = createContext(null);

export const MY_POKEMON_COUNT = 6;

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (newPokemon) => {
    setSelectedPokemon((prev) => {
      if (prev.length === MY_POKEMON_COUNT) {
        Swal.fire(`포켓몬은 ${MY_POKEMON_COUNT}개 까지 추가 가능합니다.
        포켓몬 한 개를 삭제 후 추가하세요.`);

        return prev;
      }

      // TODO selectedPokemon.includes 로 해도 될듯
      if (
        prev.find((p) => {
          return p.id === newPokemon.id;
        })
      ) {
        Swal.fire("똑같은 포켓몬 추가 불가");
        return prev;
      }

      return [...prev, newPokemon];
    });
  };

  const removePokemon = (pokemon) => {
    const updatePokemon = selectedPokemon.filter((p) => {
      return p.id !== pokemon.id;
    });
    setSelectedPokemon(updatePokemon);
  };

  //   const removePokemon = (pokemon) => {
  //     setSelectedPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
  //   };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
