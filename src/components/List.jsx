import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ListFooter from "../components/ListFooter";

const StyledList = styled.div`
  background: rgb(214, 214, 214);
  border-radius: 3px;
  width: auto;
  padding: 6px;
`;

const List = ({ title, cards }) => {
  return (
    <StyledList>
      {title}
      {cards.map((card) => (
        <Card text={card.text} key={card.id} />
      ))}
      <ListFooter/>
    </StyledList>
  );
};

export default List;
