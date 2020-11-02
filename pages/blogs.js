import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import PostList from "../components/PostList";
import { getMdData } from "./../utils/getMdData";

const Blogs = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h3>My blogs</h3>
      <MyHr />
      <PostList posts={posts} postName="blog" />
      <MyHr />
    </Layout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const posts = getMdData(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
