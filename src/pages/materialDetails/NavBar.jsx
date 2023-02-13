import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "noActiveLink");

function NavBar() {
  return (
    <Container>
      <>
        <Ul>
          <li>
            <NavLink to="submitted" className={setActive}>
              Submitted
            </NavLink>
          </li>
          <li>
            <NavLink to="waiting" className={setActive}>
              Waiting
            </NavLink>
          </li>
          <li>
            <NavLink to="late" className={setActive}>
              Late
            </NavLink>
          </li>
        </Ul>
      </>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  margin: -130px 50px;
  width: 90%;
  height: 40vh;
  background-color: #92ffdb;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  padding: 20px 20px;
  font-size: 2rem;
  font-weight: 600;
  align-items: center;
  background-color: #009e9e;

  li {
    cursor: pointer;
    text-decoration: none;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 0;
      margin: -2px 0;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }

    .noActiveLink {
      text-decoration: none;
      color: white;
    }

    .activeLink {
      text-decoration: none;
      color: black;
      border-bottom: 3px solid yellow;
    }
  }
`;
