import React from "react";
import { useNavigate } from "react-router-dom";
import { DEX_URL } from "../utils/path.js";
import pokemon from "../assets/pokemon.svg";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: orange;
`;

const StyledImg = styled.img`
  width: 600px;
  height: 300px;
`;

const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledImg src={pokemon} alt="포켓몬 도감" />

      <StyledButton
        onClick={() => {
          navigate(DEX_URL);
        }}
      >
        포켓몬 도감 시작하기
      </StyledButton>
    </StyledDiv>
  );
};

export default Home;
