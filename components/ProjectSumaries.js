import React from "react";
import Link from "next/link";
import { PostCard } from "./PostCard";
import styled from "styled-components";

const F = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & span {
    font-size: 11pt;
  }
  & i {
    margin-left: 10px;
  }
`;

export default function ProjectSumaries({ projects }) {
  return (
    <ul>
      {projects.length > 0 &&
        projects.map((project, index) => (
          <PostCard key={index} withCursor>
            {/* content */}
            <Link href={{ pathname: `/project/${project.slug}` }}>
              <>
                <h4>{project.frontmatter.title}</h4>
                <p>{project.frontmatter.description}</p>
              </>
            </Link>
            {/* github link */}
            <F>
              <a href={project.frontmatter.link}>
                <span>Github Link</span>
                <i
                  aria-hidden
                  className="fab fa-github"
                  style={{ marginRight: "15px" }}
                ></i>
              </a>
            </F>
          </PostCard>
        ))}
    </ul>
  );
}
