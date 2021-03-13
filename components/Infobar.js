import React from "react";
import styled from "styled-components";

const H = styled.div`
  width: 100vw;
  background-color: #e0e0e0;
  padding: 0 60px 0 20px;
  display: flex;
  justify-content: space-between;
  & div {
    padding: 3px;
    font-size: 12pt;
  }
`;

export default function Infobar() {
  return (
    <H>
      <div>
        current status: <strong>freelancing & looking for a job</strong>
      </div>
      <div>
        location: <strong>Southside Brisbane</strong>
      </div>
    </H>
  );
}
