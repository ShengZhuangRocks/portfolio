import matter from "gray-matter";
import { getSlugs } from "./getFileNamesAsSlugs";
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
    const contentSnippet = getFPFromDoc(document);
    // if (index == 0) {
    //   console.log(value);
    //   console.log("--------------");
    //   console.log("content", document);
    //   console.log("--------------");
    //   console.log("snippet", contentSnippet);
    //   console.log("--------------");
    // }
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

// doc value
// {
//   default: '---\r\n' +
//     'title: "Styled-components best practices"\r\n' +
//     'author: "Sheng Zhuang"\r\n' +
//     'date: "16/03/2021"\r\n' +
//     'stack: "React Redux"\r\n' +
//     'image: ""\r\n' +
//     '---\r\n' +
//     '\r\n' +
//     'style a child element\r\n' +
//     '\r\n' +
//     '...'
//   }

// value -> value.default -> matter(value.default) -> document:{data, content} -> document.content:string -> react.markdown

const getFPFromDoc = (doc) =>
  doc.content
    .split("\r\n")
    .filter((s) => s.length > 0)
    .slice(0, 1)
    .toString();
