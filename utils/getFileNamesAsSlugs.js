export const getFileNamesAsSlugs = (ctx) => {
  const keys = ctx.keys();
  const slugs = keys.map((key, idx) => {
    let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    return slug;
  });
  return slugs;
};
