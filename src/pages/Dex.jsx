import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock.js";
import { PokemonProvider } from "../context/PokemonContext.jsx";

const Dex = () => {
  return (
    <PokemonProvider>
      <StyledDiv>
        <Dashboard />
        <PokemonList pokemonList={MOCK_DATA} />
      </StyledDiv>
    </PokemonProvider>
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
