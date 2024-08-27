import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DETAIL_URL } from "../utils/path.js";
import monsterball from "../assets/monsterball.png";
import { addPokemon, removePokemon } from "../features/pokemonSlice.js";
import { useDispatch } from "react-redux";

const PokemonCard = ({ pokemon, isSelected }) => {
  // console.log("PokemonCard 랜더링");

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <StyledButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removePokemon(pokemon));
          }}
        >
          {"삭제"}
        </StyledButton>
      ) : (
        <StyledButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addPokemon(pokemon));
          }}
        >
          {"추가"}
        </StyledButton>
      )}
    </StyledDiv>
  ) : (
    <StyledDiv>
      <img src={monsterball} style={{ width: "50px", height: "50px" }} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 5px 20px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 20px;
`;

export default PokemonCard;
