import { getFileName, getSubfolderName } from "./path";

// './post5.md',
// './react-images.md',
// './redux/advancedRedux.md',

const key1 = "./post5.md";
const fileName1 = "post5";
const sub1 = "nosub";
const key2 = "./redux/advancedRedux.md";
const fileName2 = "advancedRedux";
const sub2 = "redux";
const key3 = "./R-1x/a-1x.md";
const fileName3 = "a-1x";
const sub3 = "R-1x";

// getFileName
test(`${key1}'s file name to be ${fileName1}`, () => {
  expect(getFileName(key1)).toBe(fileName1);
});

test(`${key2}'s file name to be ${fileName2}`, () => {
  expect(getFileName(key2)).toBe(fileName2);
});

test(`${key3}'s file name to be ${fileName3}`, () => {
  expect(getFileName(key3)).toBe(fileName3);
});

// getSubFolderName
test(`${key1}'s sub folder name to be ${sub1}`, () => {
  expect(getSubfolderName(key1)).toBe(sub1);
});

test(`${key2}'s sub folder name to be ${sub2}`, () => {
  expect(getSubfolderName(key2)).toBe(sub2);
});

test(`${key3}'s sub folder name to be ${sub3}`, () => {
  expect(getSubfolderName(key3)).toBe(sub3);
});
