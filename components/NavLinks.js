import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  border-right: solid #e0e0e0 1px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const SL = styled(Link)`
  padding: 5px 10px;
  height: 38px;
  border-left: solid #e0e0e0 1px;
  background-color: ${(props) => props.isCurrent && "#e0e0e0"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.isCurrent || "#e0e0e0"};
  }
  /* &:focus {
    outline: none;
    background-color: #e64a19;
    color: white;
  } */
`;

// links: "projects blogs contacts about"
export default function NavLinks({ links }) {
  const li = links.split(" ");
  const router = useRouter();
  return (
    <Container>
      {li.map((linkname, index) => (
        <SL
          key={index}
          isCurrent={router.pathname === "/" + linkname}
          // tabIndex={index + 1}
          href={`/${linkname}`}
          as="a"
        >
          {linkname}
        </SL>
      ))}
    </Container>
  );
}
