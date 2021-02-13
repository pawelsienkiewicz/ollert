import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const StyledList = styled.div`
  background: grey;
  border-radius: 3px;
  width: 300px;
  padding: 5px;
`;

const List = ({ title, cards }) => {
  return (
    <StyledList>
      <div>{title}</div>
      {cards.map((card) => (
        <Card text={card.text} key={card.id} />
      ))}
    </StyledList>
  );
};

export default List;
