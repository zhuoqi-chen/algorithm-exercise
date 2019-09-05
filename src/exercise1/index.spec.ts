import lengthOfLongestSubstringFns from "./index";

const cases = [
  {
    input: "a",
    output: 1
  },
  {
    input: "ab",
    output: 2
  },
  {
    input: "abc",
    output: 3
  },
  {
    input: "abcabcabc",
    output: 3
  },
  {
    input: "bbbbb",
    output: 1
  },
  {
    input: "acvvvvvvvvvvvvvvbbbvvvvv",
    output: 3
  },
  {
    input: "pwwkew",
    output: 3
  },
  {
    input: "abcdef",
    output: 6
  }
];
lengthOfLongestSubstringFns.forEach(fn => {
  describe(`test ${fn.name}`, () => {
    cases.forEach(({ input, output }) => {
      test(`${input} should be ${output}`, () => {
        expect(fn(input)).toBe(output);
      });
    });
  });
});
