import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const MY_POKEMON_COUNT = 6;
const Dashboard = () => {
  // console.log("Dashboard 랜더링");

  const selectedPokemon = useSelector((state) => state.pokemon);

  return (
    <StyledSection>
      <StyledH1>나만의 포켓몬</StyledH1>

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

const StyledH1 = styled.h1`
  font-size: 30px;
  color: red;
  margin-bottom: 20px;
`;

const StyledSection = styled.section`
  background-color: #f7e6c7;
  width: 80%;
  padding: 30px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 30px;
`;

export default Dashboard;
