import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import {
  MY_POKEMON_COUNT,
  usePokemonContext,
} from "../context/PokemonContext.jsx";

const Dashboard = () => {
  console.log("Dashboard 랜더링");

  const { selectedPokemon } = usePokemonContext();

  return (
    <StyledSection>
      <h1>나만의 포켓몬</h1>

      <StyledDiv>
        {selectedPokemon.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />
          );
        })}

        {Array.from({ length: MY_POKEMON_COUNT - selectedPokemon.length }).map(
          (_, index) => (
            <PokemonCard key={index} />
          )
        )}
      </StyledDiv>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: green;
  width: 80%;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
`;

export default Dashboard;
