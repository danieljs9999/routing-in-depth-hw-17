import React from "react";
import styled from "styled-components";
import Material from "../pages/header/Material";

function Main() {
  return (
    <Conteiner>
      <Material />
    </Conteiner>
  );
}

export default Main;

const Conteiner = styled.div`
  position: absolute;
  top: 100px;
  left: 200px;
  width: 95.4rem;
  height: 46.6rem;
  background-color: #dedede;
`;
