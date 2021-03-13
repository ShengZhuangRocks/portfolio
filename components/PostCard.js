import styled from "styled-components";

export const PostCard = styled.div`
  padding: 20px 10px;
  & p {
    padding-top: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border-top: 30px solid white;
      border-left: 30px solid #bdbdbd;
      width: 0px;
    }
  }
`;

export const IntroCard = styled.div``;
