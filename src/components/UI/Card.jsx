import React from "react";
import styled from "styled-components";

function Card({ children }) {
  return <CardStyle>{children}</CardStyle>;
}

export default Card;

const CardStyle = styled.div`
  width: 94%;
  height: 74vh;
  margin: 160px 0px 0px 40px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 4px;
  font-size: 1.5rem;
`;
