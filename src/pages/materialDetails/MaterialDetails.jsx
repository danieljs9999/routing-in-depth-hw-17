import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "./NavBar";

function MaterialDetails() {
  const materials = [
    { details: "1", id: 1 },
    { details: "2", id: 2 },
  ];

  const [materialDetails, setMaterialDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const newMaterialItem = materials.find((item) => item.id === +id);
    setMaterialDetails(newMaterialItem);
  }, [materials, id]);

  return (
    <Conteiner>
      <Header />
      <WhiteConteiner>
        <p>Material Details Page:</p>
        <p>Material {materialDetails.details}</p>
      </WhiteConteiner>
      <NavBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Conteiner>
  );
}

export default MaterialDetails;

const Conteiner = styled.main`
  position: absolute;
  top: 0px;
  left: 200px;
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const WhiteConteiner = styled.div`
  margin: 130px 50px;
  background-color: white;
  width: 90%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 20px;
  font-size: 2rem;
  gap: 10px;
`;

const OutletContainer = styled.div`
  position: absolute;
  top: 38rem;
  left: 80px;
  font-size: 2rem;
`;
