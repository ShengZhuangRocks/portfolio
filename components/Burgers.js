import styled from "styled-components";

const B = styled.button`
  border: none;
  display: flex;
  flex-direction: column;
  height: 16px;
  justify-content: space-between;
  & div {
    width: 20px;
    height: 2px;
    background-color: black;
  }
  &:hover {
    & div:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    & div:nth-child(2) {
      display: none;
    }
    & div:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
  @media (min-width: 640px) {
    display: none;
  }
`;

const Burgers = ({ handler }) => {
  return (
    <B onClick={() => handler(false)}>
      <div></div>
      <div></div>
      <div></div>
    </B>
  );
};

export default Burgers;
