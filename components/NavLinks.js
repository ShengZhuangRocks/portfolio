import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Fiv = styled.div`
  display: flex;
  justify-content: center;
  border-right: solid #e0e0e0;
`;

const Siv = styled.div`
  padding: 5px 10px;
  border-left: solid #e0e0e0;
  background-color: ${(props) => (props.isCurrent ? "#e0e0e0" : "")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isCurrent ? "#fafafa" : "#9e9e9e")};
    color: ${(props) => (props.isCurrent ? "" : "white")};
  }
`;

// links: "projects blogs contacts about"
export default function NavLinks({ links }) {
  const li = links.split(" ");
  const router = useRouter();
  console.log(router);
  return (
    <Fiv>
      {li.map((linkname, index) => (
        <Siv key={index} isCurrent={router.pathname === "/" + linkname}>
          <Link href={`/${linkname}`}>
            <a>{linkname}</a>
          </Link>
        </Siv>
      ))}
    </Fiv>
  );
}
