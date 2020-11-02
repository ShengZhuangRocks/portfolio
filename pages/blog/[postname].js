import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { getFileNamesAsSlugs } from "../../utils/getFileNamesAsSlugs";

const BlogPost = ({ siteTitle, frontmatter, markdownbody }) => {
  if (!frontmatter) return null;
  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/blogs">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.author}</p>
        <div>
          <ReactMarkdown source={markdownbody} />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;
  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data, // meta data of markdown file
      markdownbody: data.content, // body of markdown file
    },
  };
}

export async function getStaticPaths() {
  const blogContext = require.context("../../posts", true, /\.md$/);
  const blogSlugs = getFileNamesAsSlugs(blogContext);

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
