const { max, max2 } = require("./index");
const CASE = [
  {
    input: [2],
    output: 2
  },
  {
    input: [2, 3],
    output: 3
  },
  {
    input: [2, 6, 1],
    output: 6
  },
  {
    input: [2, 1, 1, 2],
    output: 4
  },
  {
    input: [1, 2, 3, 1, 1, 5, 6, 8, 50],
    output: 61
  }
];
describe("test exercise0", () => {
  describe("test max", () => {
    CASE.forEach(({ input, output }) => {
      test(`The case ${input.toString()} best value should be ${output}`, () => {
        expect(max(input)).toBe(output);
      });
    });
  });
  describe("test max2", () => {
    CASE.forEach(({ input, output }) => {
      test(`The case ${input.toString()} best value should be ${output}`, () => {
        expect(max2(input)).toBe(output);
      });
    });
  });
});
