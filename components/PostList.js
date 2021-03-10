import Link from "next/link";

export default function PostList({ posts, postName }) {
  if (posts === "undefined") return null;
  // console.log(posts.map((p) => console.log(p.subFolderName)));
  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link
                  href={{
                    pathname: `/${postName}/${post.subFolderName}/${post.slug}`,
                  }}
                >
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
