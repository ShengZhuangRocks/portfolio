import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { getFileNamesAsSlugs } from "../../utils/getFileNamesAsSlugs";

const Project = ({ siteTitle, frontmatter, markdownbody }) => {
  if (!frontmatter) return null;
  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/projects">
        <a>Back to projects list</a>
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

export default Project;

export async function getStaticProps({ ...ctx }) {
  const { projectName } = ctx.params;
  const content = await import(`../../project-posts/${projectName}.md`);
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
  const projectContext = require.context("../../project-posts", true, /\.md$/);
  const projectSlugs = getFileNamesAsSlugs(projectContext);

  const paths = projectSlugs.map((slug) => `/project/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
