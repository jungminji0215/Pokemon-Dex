import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock.js";

const MY_POKEMON_COUNT = 6;

const Dex = () => {
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
    // TODO setSelectedPokemon 에 바로 필터해서 넣는 방법이 있을까?
    setSelectedPokemon(updatePokemon);
  };

  return (
    <StyledDiv>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} addPokemon={addPokemon} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: orange;
`;

export default Dex;
