import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 99;
  height: 30px;
  width: 30px;
  background-color: white;
  color: #e64a19;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #e64a19;
    color: white;
  }
`;

export default function ToTopButton() {
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <Button onClick={() => moveToTop()} title="Go to top">
      <i aria-hidden className="fas fa-angle-double-up"></i>
    </Button>
  );
}
