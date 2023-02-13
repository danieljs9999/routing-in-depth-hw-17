import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/UI/Button";
import Modal from "../../components/UI/Modal";

const material = [
  { title: "Material 1", id: "1" },
  { title: "Material 2", id: "2" },
];
function Material() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const modalHandler = () => {
    searchParams.set("modal", "addNewMaterial");
    setSearchParams(searchParams);
  };

  return (
    <Conteiner>
      <Header />
      {searchParams.has("modal") ? (
        <Modal searchParams={searchParams} setSearchParams={setSearchParams} />
      ) : null}
      <Ul>
        <ConteinerButton>
          <Button onClick={modalHandler} variant="material">
            Add nev material
          </Button>
        </ConteinerButton>
        {material.map((item) => {
          return (
            <Li key={item.id}>
              <p>{item.title}</p>
              <Button onClick={() => navigate(`${item.id}/details/submitted`)}>
                Detalis
              </Button>
            </Li>
          );
        })}
      </Ul>
    </Conteiner>
  );
}

export default Material;

const Conteiner = styled.main`
  position: absolute;
  top: 0px;
  left: 200px;
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const Ul = styled.ul`
  margin-top: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ConteinerButton = styled.div`
  margin-top: -80px;
  margin-left: 970px;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  background-color: white;
  padding: 20px 20px;
  font-size: 2rem;
  border-radius: 10px;
  font-weight: 500;
`;
