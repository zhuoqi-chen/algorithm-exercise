exports.max = function max(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  //上上次最优解
  let shangshang = Math.max(nums[0], nums[1]);
  //上次最优
  let shang = Math.max(nums[0] + nums[2], nums[1]);
  for (let i = 3; i < nums.length; i++) {
    //暂存的上上此的解
    let temp = shangshang;
    //上次的解给上上此
    shangshang = shang;
    //当前最优解就是[到上上次的最优解]加上[本次的值]和[到上次的最优解]去比较,取大的值,
    //这次的最优解当成下次的上次解
    shang = Math.max(temp + nums[i], shang);
  }
  //返回最后一次的最优解
  return shang;
};
exports.max2 = function max2(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  //定义一个最优解数组,index为指针为止,value为指针到这里的最优解
  let bestArr = [
    nums[0],
    Math.max(nums[0], nums[1]),
    Math.max(nums[0] + nums[2], nums[1])
  ];
  for (let i = 3; i < nums.length; i++) {
    //当前最优解就是[到上上次的最优解]加上[本次的值]和[到上次的最优解]去比较,取大的值
    bestArr[i] = Math.max(bestArr[i - 2] + nums[i], bestArr[i - 1]);
  }
  //返回最后一次的最优解
  return bestArr[nums.length - 1];
};
