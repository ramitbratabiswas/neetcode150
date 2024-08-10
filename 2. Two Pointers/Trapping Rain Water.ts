/*
  Given n non-negative integers representing an elevation map
  where the width of each bar is 1, compute how much water it can trap after raining.
*/

// 46.41%, 58.88%

function trap(height: number[]): number {
  if (height.length === 1) return 0;
  let l = 0, r = height.length - 1;
  let leftMax = height[l], rightMax = height[r];
  let res = 0;
  while (l < r) {
      if (leftMax < rightMax) {
          l++;
          leftMax = Math.max(leftMax, height[l]);
          res += leftMax - height[l];
      } else {
          r--;
          rightMax = Math.max(rightMax, height[r]);
          res += rightMax - height[r];
      }
  }
  return res;
};