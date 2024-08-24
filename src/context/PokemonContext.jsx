import { createContext, useContext, useState } from "react";

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
        alert("6 개 넘음. 그만 추가하세요.");
        return prev;
      }

      if (
        prev.find((p) => {
          return p.id === newPokemon.id;
        })
      ) {
        alert("똑같은 포켓몬 추가 불가");
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

  // TODO setSelectedPokemon 에 바로 필터해서 넣는 방법임 나중에 수정하기
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
