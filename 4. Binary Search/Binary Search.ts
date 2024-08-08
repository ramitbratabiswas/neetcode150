/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

// 71.91%, 5.69%
function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  let mid = 0;
  while (l <= r) {
      mid = Math.floor((l + r)/2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) l = mid + 1;
      if (nums[mid] > target) r = mid - 1;
  }
  return -1;
};