import styled from "styled-components";

const Sh4 = styled.h4`
  font-size: 1.2rem;
  font-family: "Cedarville Cursive", cursive;
  & span {
    color: #e64a19;
  }
`;

const Subt = ({ children }) => (
  <Sh4>
    <span>∷</span> {children}
  </Sh4>
);

export default Subt;
