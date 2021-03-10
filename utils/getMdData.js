import matter from "gray-matter";
import { getFileName, getSubfolderName } from "./path";

export const getMdData = (context) => {
  const keys = context.keys();
  // sheng: how this context function works as CB in map?
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    let slug = getFileName(key);
    let subFolderName = getSubfolderName(key);
    const value = values[index];
    const document = matter(value.default);
    console.log(subFolderName);
    console.log(slug);
    console.log("-----");
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      subFolderName,
      slug,
    };
  });
  return data;
};
