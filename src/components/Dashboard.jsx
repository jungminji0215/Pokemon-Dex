import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

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

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <StyledSection>
      <h1>나만의 포켓몬</h1>

      <StyledDiv>
        {selectedPokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              removePokemon={removePokemon}
              isSelected={true}
            />
          );
        })}

        {Array.from({ length: 6 - selectedPokemon.length }).map((_, index) => (
          <PokemonCard key={index} />
        ))}
      </StyledDiv>
    </StyledSection>
  );
};

export default Dashboard;
