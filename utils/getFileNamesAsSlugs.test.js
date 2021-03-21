import {
  getSlugFromKey,
  getSlugs,
  getPathsAsSlugs,
} from "./getFileNamesAsSlugs";

// TypeError: require.context is not a function
// require.context can not be parsed by jest
// const ctx = require.context("../posts", true, /\.md$/);

// test getSlugs
// export const getSlugs = (keys) => keys.map(getSlugFromKey);
const keysA = ["./post5.md", "./redux/advancedRedux.md"];
const resA = [
  {
    sub: "nosub",
    filename: "post5",
  },
  {
    sub: "redux",
    filename: "advancedRedux",
  },
];
const keysB = ["./p-5.md", "./re-d/a-5.md"];
const resB = [
  {
    sub: "nosub",
    filename: "p-5",
  },
  {
    sub: "re-d",
    filename: "a-5",
  },
];

test(`should equal ${resA}`, () => {
  expect(getSlugs(keysA)).toHaveLength(2);
});

test("should have 2", () => {
  expect(getSlugs(keysB)).toEqual(resB);
});
