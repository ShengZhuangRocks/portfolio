import styled from "styled-components";
import Link from "next/link";

const Button = styled.div`
  width: 180px;
  margin-top: 10px;
  background-color: white;
  padding: 5px 20px;
  font-size: 12pt;
  border: solid black 1px;
  position: relative;
  z-index: 0;
  cursor: pointer;
  &::before {
    content: "";
    z-index: -1;
    transition: 0.2s ease-in-out;
    width: 0px;
    height: 100%;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
  }
  &:hover {
    color: white;
  }
  &:hover::before {
    width: 100%;
  }
`;

const RMButton = ({ post }) => (
  <Link
    href={{
      pathname: `/blog/${post.subFolderName}/${post.slug}`,
    }}
  >
    <Button>Read more ...</Button>
  </Link>
);

export default RMButton;
