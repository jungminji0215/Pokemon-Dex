import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { DEX_URL } from "../utils/path.js";
import MOCK_DATA from "../mock.js";
import { usePokemonContext } from "../context/PokemonContext.jsx";
import { PokemonProvider } from "../context/PokemonContext.jsx";

/**
 * TODO 궁금증 및 고민
 * PokemonDetail 은 page 라는 목적으로 만든 컴포넌트?인데
 * 이 detail 페이지 안에 있는 내용물을 따로 컴포넌트를 만들어서
 * 해야하나? 뭐가 맞는 것인지 모르겠다.
 */
const PokemonDetail = () => {
  const navigate = useNavigate();
  const pokemonId = useParams().id;

  const { addPokemon } = usePokemonContext();

  const pokemon = MOCK_DATA.find((p) => {
    return p.id === Number(pokemonId);
  });

  return (
    <PokemonProvider>
      <StyledSection>
        <img
          src={pokemon.img_url}
          style={{ width: "200px", height: "200px" }}
        />
        <StyledH2>{pokemon.korean_name}</StyledH2>
        <StyledSpan>{pokemon.types.join(", ")}</StyledSpan>
        <StyledSpan>{pokemon.description}</StyledSpan>
        <StyledButton
          onClick={() => {
            console.log("상세페이지에서 포켓몬 추가");
            addPokemon(pokemon);
          }}
        >
          추가하기
        </StyledButton>
        <StyledButton
          onClick={() => {
            navigate(DEX_URL);
          }}
        >
          뒤로가기
        </StyledButton>
      </StyledSection>
    </PokemonProvider>
  );
};

const StyledSection = styled.section`
  height: 100vh;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 5px 20px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 20px;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  color: red;
  margin-bottom: 20px;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default PokemonDetail;
