import React from "react";
import Link from "next/link";
import { PostCard } from "./PostCard";
import styled from "styled-components";
import Image from "next/image";
import RMButton from "./RMButton";

const Date = styled.div`
  font-size: 11pt;
`;

const F = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: ${(props) => props.isOdd && "row-reverse"};
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

const V = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LorR = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isOdd ? "flex-start" : "flex-end")};
  @media (max-width: 414px) {
    justify-content: flex-end;
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
              <F isOdd={isOdd}>
                {/* image */}
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
                <V>
                  <div>
                    <Date>{post.frontmatter.date}</Date>
                    <h4>{post.frontmatter.title}</h4>
                    <p>{post.contentSnippet}...</p>
                  </div>
                  <LorR isOdd={isOdd}>
                    <Link
                      href={{
                        pathname: `/blog/${post.subFolderName}/${post.slug}`,
                      }}
                    >
                      <RMButton>Read more ...</RMButton>
                    </Link>
                  </LorR>
                </V>
              </F>
            </PostCard>
          );
        })}
    </ul>
  );
}
