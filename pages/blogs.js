import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import { getMdData } from "../utils/getMdData";
import PostSumaries from "../components/PostSumaries";
import styled from "styled-components";

const Title = styled.h3`
  padding-bottom: 10px;
`;

const Blogs = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <Title>My blogs</Title>
      <MyHr />
      <PostSumaries posts={posts} />
      <MyHr />
    </Layout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const posts = getMdData(require.context("../posts", true, /\.md$/));

  // console.log(posts.map((p) => console.log(p.subFolderName)));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
