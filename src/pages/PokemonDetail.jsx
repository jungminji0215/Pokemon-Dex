import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DEX_URL } from "../utils/path.js";

const PokemonDetail = () => {
  const navigate = useNavigate();

  return (
    <StyledSection>
      <img />
      <span>식스테일</span>
      <span>타입 : 불꽃</span>
      <p>불꽃 타입의....</p>
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
