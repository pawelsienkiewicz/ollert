import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const StyledList = styled.div`
  background: grey;
  border-radius: 3px;
  width: 300px;
  padding: 8px 8px;
`;

const List = ({ title }) => {
  return (
    <StyledList>
      {title}
      <Card />
    </StyledList>
  );
};

export default List;
