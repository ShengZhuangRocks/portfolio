import React from "react";
// import Post from "./Post";
import Link from "next/link";
import { PostCard } from "./PostCard";
// import styled from "styled-components";

export default function ProjectSumaries({ posts }) {
  return (
    <ul>
      {posts &&
        posts.map((post, idx) => (
          <PostCard key={idx}>
            <Link
              href={{
                pathname: `/blog/${post.subFolderName}/${post.slug}`,
              }}
            >
              <div>
                <h4>{post.frontmatter.title}</h4>
                {/* add content snippet */}
                <p>{post.contentSnippet}...</p>
              </div>
            </Link>
          </PostCard>
        ))}
    </ul>
  );
}
