import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const P = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${(props) => (props.isClosed ? "-100vh" : "0")};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  transition: 0.2s;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
`;

const CB = styled.div`
  font-size: 1.4rem;
  position: absolute;
  right: 30px;
  top: 30px;
`;

export default function PoppuMenu({ links, isClosed, handler }) {
  const li = links.split(" ");
  const router = useRouter();
  return (
    <P isClosed={isClosed}>
      <CB onClick={() => handler(!isClosed)}>⤫</CB>
      <div>
        {li.map((linkname, index) => (
          <div
            key={index}
            onClick={() => {
              // e.preventDefault();
              router.push(`/${linkname}`);
              handler(true);
            }}
          >
            {linkname}
          </div>
        ))}
      </div>
    </P>
  );
}
