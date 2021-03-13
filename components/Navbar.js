import Link from "next/link";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import { useRouter } from "next/router";

// TODO: make the navbar appear when scrollup
const H = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
  padding: 0 60px 0 20px;
`;

const Fnav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Sa = styled.a`
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isCurrent ? "#e0e0e0" : "")};
  &:hover {
    background-color: ${(props) => (props.isCurrent ? "#fafafa" : "#e0e0e0")};
    & i {
      color: #ff7043;
    }
  }
`;

const Si = styled.i`
  margin-right: 10px;
  transform: rotate() (180deg);
  color: #e64a19;
`;

export default function Navbar() {
  const router = useRouter();
  return (
    <H>
      <Fnav>
        <Link href="/">
          <Sa isCurrent={router.pathname === "/"}>
            <Si aria-hidden className="fas fa-shoe-prints"></Si>
            <strong>Sheng's Portofolio</strong>
          </Sa>
        </Link>
        <NavLinks links="projects blogs contact" />
      </Fnav>
    </H>
  );
}
