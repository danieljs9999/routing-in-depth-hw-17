import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import ArrowLeft from "../../components/UI/ArrowLeft";
import Card from "../../components/UI/Card";

function StudentDetalisTwo() {
  return (
    <Conteiner>
      <Header />
      <Card>
        <ConteinerText>
          <p>Students Details page</p>
          <p>Students Name 3</p>
        </ConteinerText>
        <ArrowLeft />
      </Card>
    </Conteiner>
  );
}

export default StudentDetalisTwo;

const Conteiner = styled.main`
  position: absolute;
  top: 0px;
  left: 200px;
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const ConteinerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 26px;
  }
`;
