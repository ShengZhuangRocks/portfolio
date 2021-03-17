import React from "react";
import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import ProjectSumaries from "../components/ProjectSumaries";
import { getMdData } from "../utils/getMdData";
import styled from "styled-components";

const Title = styled.h3`
  padding-bottom: 10px;
`;

export default function Projects({ projects, title }) {
  return (
    <Layout pageTitle={title}>
      <Title>My Projects</Title>
      <MyHr />
      <ProjectSumaries projects={projects} />
      <MyHr />
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const projects = getMdData(
    require.context("../project-posts", true, /\.md$/)
  );

  return {
    props: {
      projects,
      title: configData.default.title,
      // description: configData.default.description,
    },
  };
}
