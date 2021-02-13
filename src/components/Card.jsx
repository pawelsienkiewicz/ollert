import React from "react";
import styled from "styled-components";

export const StyledCard = styled.div`
  background: white;
  border-radius: 3px;
  margin: 5px;
  width: auto;
  height: 50px;
  padding: 5px;
`;

const Card = ({ text }) => {
  return <StyledCard>{text}</StyledCard>;
};

export default Card;
