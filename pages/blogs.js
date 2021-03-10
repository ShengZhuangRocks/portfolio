import Layout from "../components/Layout";
import MyHr from "../components/MyHr";
import PostList from "../components/PostList";
import { getMdData } from "../utils/getMdData";
import Post from "../components/Post";

const Blogs = ({ posts, title, description, ...props }) => {
  const postchildren =
    posts && posts.map((post, idx) => <Post post={post} key={idx} />);

  return (
    <Layout pageTitle={title}>
      <h3>My blogs</h3>
      <MyHr />
      <PostList>{postchildren}</PostList>
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
