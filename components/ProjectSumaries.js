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
            <Link href={{ pathname: `/project/${project.slug}` }}>
              <div>
                <h4>
                  <a>{project.frontmatter.title}</a>
                </h4>
                <p>{project.frontmatter.description}</p>
              </div>
            </Link>
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
