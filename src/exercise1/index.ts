const debug = false;
function lengthOfLongestSubstring0(str: string): number {
  const srtArr = str.split("");
  if (str.length <= 1) {
    return str.length;
  }
  let maxLength = 0;
  for (let i = 0; i < srtArr.length; i++) {
    let tempArr = [];
    let currentStart = srtArr[i];
    tempArr.push(currentStart);
    for (let j = i + 1; j < srtArr.length; j++) {
      let currentEnd = srtArr[j];
      if (tempArr.indexOf(currentEnd) > -1) {
        if (tempArr.length > maxLength) {
          maxLength = tempArr.length;
        }
        break;
      }
      tempArr.push(currentEnd);
      if (tempArr.length > maxLength) {
        maxLength = tempArr.length;
      }
    }
  }
  return maxLength;
}
function lengthOfLongestSubstring1(s: string): number {
  var res = 0,
    i = 0;
  var temp = [];
  while (i < s.length) {
    debug && console.log("i=", i, "s=", s[i]);
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i]);
      debug && console.log("push", "s=", s[i], "temp=", temp);
    } else {
      temp.shift();
      debug && console.log("shift", "temp=", temp);
      continue;
    }
    res = Math.max(res, temp.length);
    debug && console.log("res=", res, "i=", i);
    i++;
  }
  return res;
}
function lengthOfLongestSubstring2(s: string): number {
  let res = 0;
  let i = 0;
  let j = 0;
  let set = new Set();
  const length = s.length;
  while (i < length && j < length) {
    debug && console.log("i=", i, "j=", j);
    if (!set.has(s[j])) {
      set.add(s[j++]);
      res = Math.max(res, j - i);
      debug && console.log("res=", res);
    } else {
      debug && console.log("delete");
      set.delete(s[i++]);
    }
  }
  return res;
}
export default [
  lengthOfLongestSubstring0,
  lengthOfLongestSubstring1,
  lengthOfLongestSubstring2
];
