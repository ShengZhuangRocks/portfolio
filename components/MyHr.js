import React from "react";
import styled from "styled-components";

const H = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    & hr {
      transition: flex 0.3s ease-in-out;
      flex: 0;
    }
  }
`;

const L = styled.hr`
  margin: 0;
  flex: 12;
  border: none;
  border-top: dotted;
`;

const R = styled.div`
  flex: 1;
  background-color: black;
  height: 5px;
`;

export default function MyHr() {
  return (
    <H>
      <L />
      <R />
    </H>
  );
}
