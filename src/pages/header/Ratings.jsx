import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Card from "../../components/UI/Card";

function Ratings() {
  return (
    <RatingsConteiner>
      <Header />
      <Card>
        <Conteiner>
          <p>Ratings page</p>
        </Conteiner>
      </Card>
    </RatingsConteiner>
  );
}

export default Ratings;

const RatingsConteiner = styled.main`
  position: absolute;
  top: 0px;
  left: 200px;
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const Conteiner = styled.div`
  p {
    font-size: 26px;
  }
`;
