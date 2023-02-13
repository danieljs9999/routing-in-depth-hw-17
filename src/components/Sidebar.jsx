import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "noActiveLink");

function Sidebar() {
  return (
    <Aside>
      <Conteiner>
        <Logo>LOGO</Logo>
        <TextConteiner>
          <li className="text">
            <p>
              <NavLink to="/courses/materials" className={setActive}>
                Courses
              </NavLink>
            </p>
          </li>
          <li className="text">
            <p>
              <NavLink to="/anouncements" className={setActive}>
                Anouncements
              </NavLink>
            </p>
          </li>
          <li className="text">
            <p>
              <NavLink to="/notifications" className={setActive}>
                Notifications
              </NavLink>
            </p>
          </li>
          <li className="text">
            <p>
              <NavLink to="/schedule" className={setActive}>
                Schedule
              </NavLink>
            </p>
          </li>
        </TextConteiner>
      </Conteiner>
    </Aside>
  );
}

export default Sidebar;

const Aside = styled.aside`
  position: relative;
  background-color: #cfcfcf;
  width: 200px;
  height: 100vh;
  display: flex;
`;

const Logo = styled.h1`
  color: #d000d0;
  font-size: 3rem;
  margin: 0 0 0 40px;
`;

const Conteiner = styled.div`
  margin-top: 60px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const TextConteiner = styled.ul`
  background-color: white;
  width: 200px;
  font-weight: 500;
  cursor: pointer;
  list-style: none;

  .text {
    :hover {
      background-color: #d218fc;
    }
  }

  p {
    font-size: 1.7rem;
    padding: 8px;
    margin: 0;
    margin-left: 10px;
  }

  .activeLink {
    color: #000000;
    text-decoration: none;
  }

  .noActiveLink {
    color: #0084ff;
    text-decoration: none;
  }
`;
