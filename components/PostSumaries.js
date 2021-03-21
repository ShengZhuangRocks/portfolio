import React from "react";
import { PostCard } from "./PostCard";
import styled from "styled-components";
import Image from "next/image";
import RMButton from "./RMButton";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../utils/CodeBlock";

// card content container
const C3 = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: ${(props) => props.isOdd && "row-reverse"};
  & .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p.date {
      font-size: 11pt;
    }
    & p {
      overflow: hidden;
    }
  }
  & .button-flex {
    display: flex;
    justify-content: ${(props) => (props.isOdd ? "flex-start" : "flex-end")};
    @media (max-width: 414px) {
      justify-content: flex-end;
    }
  }
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export default function ProjectSumaries({ posts }) {
  return (
    <ul>
      {posts &&
        posts.map((post, idx) => {
          const isOdd = idx % 2 === 0;
          return (
            <PostCard key={idx}>
              {/* card content container */}
              <C3 isOdd={isOdd}>
                {/* image */}
                {/* sheng: this div outside the image just to make sure that image size is right */}
                {/* not sure why this behaviour, need to dig into next/image */}
                <div>
                  <Image
                    src={`/static/${post.frontmatter.image}`}
                    alt="image missing"
                    width={180}
                    height={180}
                    layout="fill"
                  />
                </div>
                {/* info */}
                <div className="info">
                  <div>
                    <p className="date">{post.frontmatter.date}</p>
                    <h4>{post.frontmatter.title}</h4>
                    {/* <p>{post.contentSnippet}...</p> */}
                    <ReactMarkdown
                      source={post.contentSnippet}
                      renderers={{ code: CodeBlock }}
                    />
                  </div>
                  <div className="button-flex">
                    <RMButton post={post}>Read more ...</RMButton>
                  </div>
                </div>
              </C3>
            </PostCard>
          );
        })}
    </ul>
  );
}
