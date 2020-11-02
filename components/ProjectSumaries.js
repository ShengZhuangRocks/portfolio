import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function ProjectSumaries({ projects }) {
  return (
    <div>
      <ul>
        {projects.length > 0 &&
          projects.map((project, index) => (
            <li key={index}>
              <Link href={{ pathname: `/project/${project.slug}` }}>
                <h5>
                  <a>{project.frontmatter.title}</a>
                </h5>
              </Link>
              <p>{project.frontmatter.description}</p>
              <a href={project.frontmatter.link}>
                <i
                  aria-hidden
                  className="fab fa-github"
                  style={{ marginRight: "15px" }}
                ></i>
                Github Link
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
