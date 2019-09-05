exports.findMax = function findMax(str) {
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
};
