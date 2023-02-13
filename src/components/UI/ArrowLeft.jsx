import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ArrowLeft() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return <ArrowLeftStyle onClick={goBack}></ArrowLeftStyle>;
}

export default ArrowLeft;

const ArrowLeftStyle = styled(SlArrowLeft)`
  position: fixed;
  top: 580px;
  left: 160px;
  font-weight: 600;
  font-size: 50px;
  color: #00aac4;
  cursor: pointer;

  :hover {
    color: #007385;
  }

  :active {
    color: #00aac4;
  }
`;
