import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { createPortal } from "react-dom";

const Backdrop = () => {
  return <StyledBackdrop />;
};

const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const backdrop = document.getElementById("backdrop");
const modalContent = document.getElementById("modal-overlay");

function Modal({ searchParams, setSearchParams }) {
  const closeModalHandler = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };

  return (
    <>
      {createPortal(<Backdrop />, backdrop)}
      {createPortal(
        <ModalContent>
          <Text>Add new material modal</Text>
          <ButtonConteiner>
            <Button onClick={closeModalHandler}>Close modal</Button>
          </ButtonConteiner>
        </ModalContent>,
        modalContent
      )}
    </>
  );
}

export default Modal;

const StyledModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 180px 0px 0px 460px;
  width: 600px;
  height: 300px;
  background-color: #feebd3;
  border-radius: 10px;
  z-index: 100;

  animation: slide-down 200ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ButtonConteiner = styled.div`
  margin: 30px 0px 0px 380px;
`;

const Text = styled.p`
  font-size: 3rem;
  margin: 80px 70px;
`;

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.7);
  width: 109.7rem;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(5px) contrast(0.1);
`;
