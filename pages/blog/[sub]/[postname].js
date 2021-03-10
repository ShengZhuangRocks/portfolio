import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../../components/Layout";
import { getPathsAsSlugs } from "../../../utils/getFileNamesAsSlugs";
import CodeBlock from "../../../utils/CodeBlock";

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
          <ReactMarkdown
            source={markdownbody}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export async function getStaticProps({ ...ctx }) {
  const { sub, postname } = ctx.params;
  const isSub = sub !== "nosub";
  const content = isSub
    ? await import(`../../../posts/${sub}/${postname}.md`)
    : await import(`../../../posts/${postname}.md`);
  const config = await import(`../../../siteconfig.json`);
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
  const blogContext = require.context("../../../posts", true, /\.md$/);
  const blogSlugs = getPathsAsSlugs(blogContext);

  const paths = blogSlugs.map((slug) => `/blog/${slug.sub}/${slug.filename}`);
  return {
    paths,
    fallback: false,
  };
}
