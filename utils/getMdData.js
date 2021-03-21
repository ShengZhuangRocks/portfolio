import matter from "gray-matter";
import { getFileName, getSubfolderName } from "./path";

export const getMdData = (context) => {
  const keys = context.keys();
  // sheng: how this context function works as CB in map?
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    const slug = getFileName(key);
    const subFolderName = getSubfolderName(key);
    const value = values[index];
    const document = matter(value.default);
    // const snippet = getFPFromDoc(document);
    const snippet = document.content
      .split("\r\n")
      .filter((s) => s.length > 0)
      .slice(0, 1)
      .toString();

    return {
      frontmatter: document.data,
      markdownBody: document.content,
      contentSnippet: snippet,
      subFolderName,
      slug,
    };
  });
  return data;
};
