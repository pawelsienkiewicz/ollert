import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";

const StyledList = styled.div`
  background: rgb(214, 214, 214);
  border-radius: 3px;
  width: auto;
  padding: 6px;
`;

const List = ({ title, cards, idList }) => {
  return (
    <Droppable droppableId={String(idList)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <StyledList>
            {title}
            {cards.map((card, index) => (
              <Card text={card.text} key={card.id} id={card.id} index={index} />
            ))}
            <AddButton idList={idList} />
            {provided.placeholder}
          </StyledList>
        </div>
      )}
    </Droppable>
  );
};

export default List;
