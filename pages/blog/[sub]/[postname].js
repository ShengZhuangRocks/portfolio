import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../../components/Layout";
import { getPathsAsSlugs } from "../../../utils/getFileNamesAsSlugs";
import CodeBlock from "../../../utils/CodeBlock";
import styled from "styled-components";

const SR = styled.div`
  & h3 {
    padding: 10px 0;
  }
  & p {
    padding: 10px 0;
  }
  & hr {
    margin: 20px 0;
    border: none;
    border-top: dotted 3px black;
  }
`;

const FR = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 10px;
`;

const BlogPost = ({ siteTitle, frontmatter, markdownbody }) => {
  if (!frontmatter) return null;
  return (
    <Layout
      pageTitle={`${siteTitle} | ${frontmatter.title}`}
      description={frontmatter.description || ""}
    >
      {/* to the right */}
      <FR>
        <Link href="/blogs">
          <a>Back to post list</a>
        </Link>
      </FR>
      {/*  */}
      <article>
        <Title>{frontmatter.title}</Title>
        <SR>
          <ReactMarkdown
            source={markdownbody}
            renderers={{ code: CodeBlock }}
          />
        </SR>
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
