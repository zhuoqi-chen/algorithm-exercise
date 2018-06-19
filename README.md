# 算法练习

## test

```
npm run test
```

## exercise0. 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，_如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警_。

给定一个代表每个房屋存放金额的非负整数数组，计算你*在不触动警报装置的情况下*，能够偷窃到的最高金额。

示例 1:

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

示例 2:

```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

提示:

```
f(0) = array[0]
f(1) = max(array[0], array[1])
f(n) = max( f(n-2) + array[n], f(n-1) )
```

## exercise1. 无重复字符的最长子串

给定一个字符串，找出不含有重复字符的最长子串的长度。

示例：

给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是 3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是 1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是 3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。
