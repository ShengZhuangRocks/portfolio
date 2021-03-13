import Link from "next/link";
import { PostCard } from "./PostCard";

const Post = ({ post }) => {
  return (
    <PostCard>
      <Link
        href={{
          pathname: `/blog/${post.subFolderName}/${post.slug}`,
        }}
      >
        <div>
          <h4>{post.frontmatter.title}</h4>
          {/* add content snippet */}
          <p>{post.contentSnippet}...</p>
        </div>
      </Link>
    </PostCard>
  );
};

export default Post;
