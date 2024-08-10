/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

// 59.01%, 42.51%

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let l, r = 0;
  let returned : number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
      while (i < nums.length - 2 && nums[i - 1] === nums[i]) i++;
      l = i + 1;
      r = nums.length - 1;
      while (l < r) {
          if (nums[l] + nums[r] + nums[i] === 0) {
              returned.push([nums[i], nums[l], nums[r]]);
              while (l < r && nums[l] === nums[l + 1])l++;
          }
          if (nums[l] + nums[r] + nums[i] > 0) {
              r--;
          } else {
              l++;
          }
      }
  }
  return returned;
};