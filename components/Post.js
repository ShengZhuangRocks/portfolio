import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <Link
        href={{
          pathname: `/blog/${post.subFolderName}/${post.slug}`,
        }}
      >
        <a>{post.frontmatter.title}</a>
      </Link>
    </div>
  );
};

export default Post;
