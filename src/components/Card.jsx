import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

export const StyledCard = styled.div`
  background: white;
  border-radius: 3px;
  margin: 6px;
  width: auto;
  height: auto;
  padding: 6px;
`;

const Card = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <StyledCard>{text}</StyledCard>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
