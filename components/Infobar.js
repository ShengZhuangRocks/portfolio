import React from "react";
import styled from "styled-components";

const H = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  & div {
    padding: 3px 0;
    font-size: 12pt;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & div {
      padding: 0;
      padding-top: 3px;
    }
    & div ~ div {
      padding-bottom: 3px;
    }
  }
  @media (max-width: 414px) {
    display: none;
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
