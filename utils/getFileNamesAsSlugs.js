import { getSubfolderName, getFileName } from "./path";

// decaprecated
export const getFileNamesAsSlugs = (ctx) => {
  const keys = ctx.keys();
  const slugs = keys.map((key) => {
    return getFileName(key);
  });
  return slugs;
};

// export const getPathsAsSlugs = (ctx) => {
//   const keys = ctx.keys();
//   const slugs = keys.map((key) => {
//     return {
//       sub: getSubfolderName(key),
//       filename: getFileName(key),
//     };
//   });
//   return slugs;
// };

export const getSlugFromKey = (key) => ({
  sub: getSubfolderName(key),
  filename: getFileName(key),
});
export const getSlugs = (keys) => keys.map(getSlugFromKey);

export const getPathsAsSlugs = (ctx) => {
  const keys = ctx.keys();
  return getSlugs(keys);
};
