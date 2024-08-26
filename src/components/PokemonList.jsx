import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {
  // console.log("PokemonList 랜더링");

  return (
    <StyledSection>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
        );
      })}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: wheat;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 30px;
  padding: 30px;
  border-radius: 10px;
`;

export default PokemonList;
