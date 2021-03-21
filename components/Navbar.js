import Link from "next/link";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import { useRouter } from "next/router";
import Burgers from "./Burgers";

// TODO: make the navbar appear when scrollup
const Container = styled.div`
  width: 100%;
  height: 38px;
  background-color: #f5f5f5;
  padding: 0 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SL = styled(Link)`
  height: 38px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.isCurrent && "#e0e0e0"};
  &:hover {
    background-color: ${(props) => props.isCurrent || "#e0e0e0"};
    & i {
      color: #ff7043;
    }
  }
`;

const iconStyle = {
  marginRight: "10px",
  transform: "rotate(180deg)",
  color: "#e64a19",
};

export default function Navbar({ handler }) {
  const router = useRouter();
  return (
    <Container>
      {/* TODO: class on server don't match with client */}
      <SL isCurrent={router.pathname === "/"} href="/" as="a">
        <>
          <i aria-hidden className="fas fa-shoe-prints" style={iconStyle}></i>
          <strong>Sheng's Portofolio</strong>
        </>
      </SL>
      <NavLinks links="projects blogs contact" />
      {/* hambuger menu to open popup menu on small screen */}
      <Burgers handler={handler} />
    </Container>
  );
}
