/**
 * @param {string} path reltive path
 * like: "./posts/filename.md" or "./posts/sub/filename.md"
 * @return {string} slug
 * like: "filename" from example input above
 */
export const getFileName = (path) => {
  // [\\\/] -> "/" | "\"
  const fnWithExtension = path.replace(/^.*[\\\/]/, "");
  const fileName = fnWithExtension.slice(0, -3);
  return fileName;
};

/**
 * @param {string} path reltive path
 * like: "./posts/sub/filename.md"
 * we assume there is only one level of subfolder in this case
 * @return {string} "sub" from example input above
 */
export const getSubfolderName = (path) => {
  const re = /^\.\/([ \w | \- ]+)\/.+md$/;
  // const re = new RegExp(
  //   "^\\.\\/" + // start with ./
  //     "([ x-z | X-Z | \\- ]+)" + // sub | s-ub | suB
  //     "\\/.+" + // /filename.
  //     "md$" // end with md
  // );
  const sub = re.exec(path);
  return sub ? sub[1] : "nosub";
};
