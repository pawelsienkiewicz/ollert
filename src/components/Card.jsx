import React from "react";
import styled from "styled-components";

export const StyledCard = styled.div`
  background: red;
  border-radius: 3px;
  width: auto;
`;

const Card = () => {
  return <StyledCard>To twoja karta</StyledCard>;
};

export default Card;
