import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/UI/Button";

const students = [
  { title: "Student Name 1", id: "1" },
  { title: "Student Name 2", id: "2" },
  { title: "Student Name 3", id: "3" },
];

function Students() {
  const navigate = useNavigate();

  return (
    <Conteiner>
    <Header />
      <Ul>
        {students.map((item) => {
          return (
            <Li key={item.id}>
              <p>{item.title}</p>
              <Button
                onClick={() => navigate(`/courses/students/${item.id}/details`)}
              >
                Detalis
              </Button>
            </Li>
          );
        })}
      </Ul>
    </Conteiner>
  );
}

export default Students;

const Conteiner = styled.main`
  position: absolute;
  top: 0px;
  left: 200px;
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const Ul = styled.ul`
  margin-top: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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
