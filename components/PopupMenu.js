import styled from "styled-components";
import { useRouter } from "next/router";

// TODO: add more detail and style to this page

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

// close the popup menu
const CloseButton = styled.button`
  font-size: 1.4rem;
  position: absolute;
  right: 30px;
  top: 30px;
  background: none;
  border: none;
`;

export default function PoppuMenu({ links, isClosed, handler }) {
  const li = links.split(" ");
  const router = useRouter();
  return (
    <P isClosed={isClosed}>
      <CloseButton onClick={() => handler(!isClosed)}>⤫</CloseButton>
      {/* menu */}
      <div>
        {li.map((linkname, index) => (
          <div
            key={index}
            onClick={() => {
              // redirect
              router.push(`/${linkname}`);
              // close popupMenu
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
