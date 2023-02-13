import React from "react";
import styled from "styled-components";

function Button({ children, onClick, variant }) {
  return (
    <ButtonStyle onClick={onClick} variant={variant}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

const backgroundColor = (props) => {
  return props.variant === "material" ? "#d2691e" : "#00c4c4";
};

const backgroundColorHover = (props) => {
  return props.variant === "material" ? "#ac4800" : "#006b89";
};

const backgroundColorActive = (props) => {
  return props.variant === "material" ? "#ed6e12" : "#00aac4";
};

const ButtonStyle = styled.button`
  background-color: ${backgroundColor};
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: ${backgroundColorHover};
  }

  :active {
    background-color: ${backgroundColorActive};
  }
`;
