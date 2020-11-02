import React from "react";
import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import ProjectSumaries from "../components/ProjectSumaries";
import ToTopButton from "../components/ToTopButton";
import { getMdData } from "./../utils/getMdData";

export default function Projects({ projects, title, ...props }) {
  return (
    <Layout pageTitle={title}>
      <h3>My Projects</h3>
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
