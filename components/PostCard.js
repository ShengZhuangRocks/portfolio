import styled from "styled-components";

export const PostCard = styled.div`
  padding: 20px 10px;
  cursor: ${(props) => props.withCursor && "pointer"};
  & p {
    padding-top: 10px;
  }
  &:hover {
    background-color: #f5f5f5;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border-top: 18px solid white;
      border-left: 18px solid #bdbdbd;
      width: 0px;
    }
  }
`;

// export const IntroCard = styled.div``;
