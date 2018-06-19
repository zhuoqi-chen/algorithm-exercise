const { findMax } = require("./index");
const CASE = [
  {
    input: 'a',
    output: 1
  },
  {
    input: 'ab',
    output: 2
  },
  {
    input: 'abc',
    output: 3
  },
  {
    input: 'abcabcabc',
    output: 3
  },
  {
    input: 'abcabcabcd',
    output: 4
  },
  {
    input: 'bbbbb',
    output: 1
  },
  {
    input: 'pwwkew',
    output: 3
  },
];
describe("test exercise1", () => {
  CASE.forEach(({ input, output }) => {
    test(`${input} => ${output}`, () => {
      expect(findMax(input)).toBe(output);
    });
  });
});
