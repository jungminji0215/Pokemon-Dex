import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { DEX_URL } from "../utils/path.js";
import MOCK_DATA from "../mock.js";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const pokemonId = useParams().id;
  const pokemon = MOCK_DATA.find((p) => {
    return p.id === Number(pokemonId);
  });

  return (
    <StyledSection>
      <img src={pokemon.img_url} />
      <span>{pokemon.korean_name}</span>
      <span>{pokemon.types.join(", ")}</span>
      <p>{pokemon.description}</p>
      <button
        onClick={() => {
          navigate(DEX_URL);
        }}
      >
        뒤로가기
      </button>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default PokemonDetail;
