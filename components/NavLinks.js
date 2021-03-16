import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Fiv = styled.div`
  display: flex;
  justify-content: center;
  border-right: solid #e0e0e0 1px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Siv = styled.div`
  padding: 5px 10px;
  height: 38px;
  border-left: solid #e0e0e0 1px;
  background-color: ${(props) => (props.isCurrent ? "#e0e0e0" : "")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isCurrent ? "#fafafa" : "#9e9e9e")};
    color: ${(props) => (props.isCurrent ? "" : "white")};
  }
  &:focus {
    outline: none;
    background-color: #e64a19;
    color: white;
  }
`;

// links: "projects blogs contacts about"
export default function NavLinks({ links }) {
  const li = links.split(" ");
  const router = useRouter();
  return (
    <Fiv>
      {li.map((linkname, index) => (
        <Siv
          key={index}
          isCurrent={router.pathname === "/" + linkname}
          tabIndex={index + 1}
        >
          <Link href={`/${linkname}`}>
            <a tabIndex={-1}>{linkname}</a>
          </Link>
        </Siv>
      ))}
    </Fiv>
  );
}
