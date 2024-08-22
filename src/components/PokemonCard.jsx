import React from "react";
import styled from "styled-components";

const PokemonCard = ({ pokemon, addPokemon, removePokemon, isSelected }) => {
  return pokemon ? (
    <StyledDiv>
      <img src={pokemon.img_url} />
      <span>{pokemon.korean_name}</span>
      <span>No.{pokemon.id}</span>

      {isSelected ? (
        <button
          onClick={() => {
            removePokemon(pokemon);
          }}
        >
          {"삭제"}
        </button>
      ) : (
        <button
          onClick={() => {
            addPokemon(pokemon);
          }}
        >
          {"추가"}
        </button>
      )}
    </StyledDiv>
  ) : (
    "없음"
  );
};

const StyledDiv = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default PokemonCard;
