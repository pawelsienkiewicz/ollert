import React from "react";
import styled from "styled-components";

export const StyledCard = styled.div`
  background: white;
  border-radius: 3px;
  margin: 6px;
  width: auto;
  height: auto;
  padding: 6px;
`;

const Card = ({ text }) => {
  return <StyledCard>{text}</StyledCard>;
};

export default Card;
