import matter from "gray-matter";
import { getFileName, getSubfolderName } from "./path";

const getFPFromDoc = (doc) =>
  doc.content
    .split("\r\n")
    .filter((s) => s.length > 0)
    .slice(0, 1)
    .toString();

export const getMdData = (context) => {
  const keys = context.keys();
  // sheng: how this context function works as CB in map?
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    const slug = getFileName(key);
    const subFolderName = getSubfolderName(key);
    const value = values[index];
    const document = matter(value.default);
    const contentSnippet = getFPFromDoc(document);

    return {
      frontmatter: document.data,
      markdownBody: document.content,
      contentSnippet,
      subFolderName,
      slug,
    };
  });
  return data;
};
