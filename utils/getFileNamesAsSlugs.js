import { getSubfolderName, getFileName } from "./path";

export const getFileNamesAsSlugs = (ctx) => {
  const keys = ctx.keys();
  const slugs = keys.map((key) => {
    return getFileName(key);
  });
  return slugs;
};

export const getPathsAsSlugs = (ctx) => {
  const keys = ctx.keys();
  const slugs = keys.map((key) => {
    return {
      sub: getSubfolderName(key),
      filename: getFileName(key),
    };
  });
  return slugs;
};
