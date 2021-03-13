import Layout from "../components/Layout";
import ProjectSumaries from "../components/ProjectSumaries";
import { getMdData } from "../utils/getMdData";
import styled from "styled-components";
import PostSumaries from "../components/PostSumaries";
import More from "../components/More";
import Subt from "../components/SubTitle";

const Title = styled.h3`
  padding-bottom: 10px;
  font-family: "Rubik", sans-serif;
  & span {
    font-family: "Cedarville Cursive", cursive;
    padding-right: 10px;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: ${(props) => (props.nopadding ? "0px" : "10px 10px 15px 10px")};
  margin-bottom: 20px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
`;

const U = styled.ul`
  padding-left: 20px;
  & li {
    padding: 5px 0;
    list-style-type: none;
  }
  & span {
    font-family: "Cedarville Cursive", cursive;
    margin-right: 10px;
  }
`;

const Ch = styled.div`
  padding-left: 24px;
  background-color: #f5f5f5;
`;

const Litem = ({ stack, children }) => (
  <li>
    <div>
      <span>&</span>
      <strong>{stack}</strong>:
    </div>
    <Ch>{children}</Ch>
  </li>
);

// const favStacks = [
//   {
//     stack: "Javascript|Typescript",
//     description:
//       "Javascript is weird but awesome, while Typescript requires a lot more efforts, but if you stick to it, it will make your day much easier, and much better output.",
//   },
//   {
//     stack: "Javascript|Typescript",
//     description:
//       "Javascript is weird but awesome, while Typescript requires a lot more efforts, but if you stick to it, it will make your day much easier, and much better output.",
//   },
// ];

const Index = ({ posts, projects, title }) => {
  return (
    <Layout pageTitle={title}>
      <Title>
        <span>I am</span> Sheng Zhuang
      </Title>
      {/* about me */}
      <Subt>About me</Subt>
      <Card>
        <p>
          I am a freelance full stack web developer, living in southside of
          Brisbane.
        </p>
        <p>
          Building intuitive, responsive, fast and dynamic web app is my
          passion.
        </p>
      </Card>
      {/* skills */}
      <Subt>Favourote stacks</Subt>
      <Card>
        <p>Currently, I am really enjoy working with these stacks:</p>
        <U>
          <Litem stack="Javascript|Typescript">
            Javascript is weird but awesome, while Typescript requires a lot
            more efforts, but if you stick to it, it will make your day much
            easier, and much better output.
          </Litem>
          <Litem stack="React">
            Best JavaScript library for building UI right now, especially with
            new features like Functional Component and Hooks.
          </Litem>
          <Litem stack="Next.js">
            A Framework can really do a lot of heavy lifting for you in
            developing. And for starter, it provides a blueprint of frontend web
            development.
          </Litem>
          <Litem stack="Styled-Component">
            Somehow I like to write some raw CSS code in Styled-Component,
            instead of a lot of class name like Bootstrap and Tailwind, and with
            Styled-Component, I don't need to worry too much about coming up new
            variable|class names
          </Litem>
          <Litem stack="Redux">
            I have quite mix feeling on Redux, a lot of boilerplate but still a
            good tool for an unavoidable state management issue in React. But
            right now, with Redux Tool Kit, I am quite happy with it.
          </Litem>
        </U>
      </Card>
      {/* stacks that I am interested */}
      <Subt>Stacks to learn</Subt>
      <Card>
        <p>Stacks that I am keen on learning:</p>
        <U>
          <Litem stack="React Native">
            It's React, and can be deployed on many platforms, so it is hot.
          </Litem>
          <Litem stack="Golang">
            I spent quite some time learning Golang last year, I really like it.
            Hope I got some times to practice and further learn it this year.
          </Litem>
        </U>
      </Card>

      {/* favourite tools */}
      <Subt>Favourite tools</Subt>
      <Card>
        <p>My favourite tools:</p>
        <U>
          <Litem stack="VScode">Best code editor I have used</Litem>
          <Litem stack="Material Design Color Tool">
            <a href="https://material.io/resources/color/#!/?view.left=0&view.right=0">
              material.io
            </a>
          </Litem>
          <Litem stack="Hyper.is">Terminal I am using tight now</Litem>
        </U>
      </Card>

      {/* recent project */}
      <Subt>Projects</Subt>
      <Card nopadding>
        <ProjectSumaries projects={projects.slice(0, 2)} />
        <More link="projects" />
      </Card>

      {/* recent articles */}
      <Subt>Articles</Subt>
      <Card nopadding>
        <PostSumaries posts={posts.slice(0, 2)} />
        <More link="blogs" />
      </Card>
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
