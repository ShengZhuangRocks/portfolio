import matter from "gray-matter";

export const getMdData = (context) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    // (./post1.md) -> (post1)
    let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
  });
  return data;
};
