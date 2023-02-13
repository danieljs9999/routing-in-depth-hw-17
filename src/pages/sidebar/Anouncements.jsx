import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/Button";

function Anouncements() {
  const navigate = useNavigate();

  const studentNavigate = () => {
    navigate("/courses/students");
  };

  return (
    <Conteiner>
      <WhiteConteiner>
        <Text>Announcements Page</Text>
        <ButtonConteiner>
          <Button onClick={studentNavigate}>Go to Students page</Button>
        </ButtonConteiner>
      </WhiteConteiner>
    </Conteiner>
  );
}

export default Anouncements;

const Conteiner = styled.main`
  position: absolute;
  top: 0px;
  left: 200px;
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const WhiteConteiner = styled.div`
  margin: 40px;
  background-color: white;
  width: 94%;
  height: 94vh;
  padding-top: 40px;
`;

const Text = styled.h1`
  margin: 0px 40px;
`;

const ButtonConteiner = styled.div`
  margin: 60px 40px;
`;
