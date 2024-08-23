import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, addPokemon }) => {
  return (
    <StyledSection>
      {/* React는 JSX 코드를 JavaScript로 변환할 때, 
      배열이 반환되면 그 배열의 요소들을 렌더링하여 화면에 출력한다. 
      즉, [컴포넌트1, 컴포넌트2, 컴포넌트3, ...]와 같은 배열이 반환되면, 
      React는 이 배열의 각 컴포넌트를 순차적으로 렌더링하고,
       그것들을 DOM에 추가하기때문에 map 을 사용해보자. */}
      {pokemonList.map((pokemon) => {
        // TODO 리팩토링 : 상태 전역 관리
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
            isSelected={false}
          />
        );
      })}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: blue;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 30px;
  padding: 30px;
`;

export default PokemonList;
