import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DETAIL_URL } from "../utils/path.js";
import { usePokemonContext } from "../context/PokemonContext.jsx";

const PokemonCard = ({ pokemon, isSelected }) => {
  console.log("PokemonCard 랜더링");

  const { addPokemon, removePokemon } = usePokemonContext();

  const navigate = useNavigate();

  return pokemon ? (
    <StyledDiv
      onClick={() => {
        navigate(DETAIL_URL + "/" + pokemon.id);
      }}
    >
      <img src={pokemon.img_url} />
      <span>{pokemon.korean_name}</span>
      <span>No.{pokemon.id}</span>

      {isSelected ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            removePokemon(pokemon);
          }}
        >
          {"삭제"}
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
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
