import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "noActiveLink");

function Header() {
  return (
    <HeaderStyle>
      <nav>
        <Ul>
          <li>
            <NavLink to="/courses/materials" className={setActive}>
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/students" className={setActive}>
              Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/ratings" className={setActive}>
              Ratings
            </NavLink>
          </li>
        </Ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #006aff;
  padding: 20px 30px;

`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin-left: 20px;

  li {
    margin-top: 8px;
    list-style: none;
    font-size: 2rem;
    font-weight: 500;
    color: white;

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
  }

  .activeLink {
    color: #000000;
    text-decoration: none;
  }

  .noActiveLink {
    color: white;
    text-decoration: none;
  }
`;
