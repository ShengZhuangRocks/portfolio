import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import ProjectSumaries from "../components/ProjectSumaries";
import ToTopButton from "../components/ToTopButton";
import { getMdData } from "../utils/getMdData";

const Index = ({ posts, projects, title, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h3>I am Sheng Zhuang</h3>
      <MyHr />
      <h4>About me</h4>
      <p>I am a freelance full stack web developer.</p>
      <p>I live in Brisbane, Queensland.</p>
      <p>
        I am right now looking for a job, feel free to{" "}
        <a>
          <strong>contact me</strong>
        </a>
      </p>

      <MyHr />
      <h4>Projects</h4>
      <ProjectSumaries projects={projects} />

      <MyHr />
      <h4>Skills</h4>
      <p style={{ textAlign: "center" }}>
        My favourite technologies and main focus right now :
      </p>
      <ul>
        <li>HTML & Css</li>
        <li>Javascript & Typescript</li>
        <li>Nodejs & PostgreSQL & TypeORM & Redis</li>
        <li>React & Graphql </li>
      </ul>
      <p style={{ textAlign: "center" }}>I am also familiar with :</p>
      <ul>
        <li>Python, Django</li>
        <li>Go, Kotlin</li>
      </ul>
      <p style={{ textAlign: "center" }}>My favourite tools :</p>
      <ul>
        <li>VS code</li>
        <li>Git Bash, Github</li>
        <li>Docker</li>
      </ul>
      <MyHr />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const postContext = require.context("../posts", true, /\.md$/);
  // TODO: sorting posts & projects
  const posts = getMdData(postContext);
  const projectContext = require.context("../project-posts", true, /\.md$/);
  const projects = getMdData(projectContext);

  return {
    props: {
      posts,
      projects,
      title: configData.default.title,
    },
  };
}
