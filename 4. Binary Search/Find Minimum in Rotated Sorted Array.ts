/*
  Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
  For example, the array nums = [0,1,2,4,5,6,7] might become:

  [4,5,6,7,0,1,2] if it was rotated 4 times.
  [0,1,2,4,5,6,7] if it was rotated 7 times.
  Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time
  results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

  Given the sorted rotated array nums of unique elements, return the minimum element of this array.

  You must write an algorithm that runs in O(log n) time.
*/

// 80.44%, 21.15%

function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  let l = 0, r = nums.length - 1, mid = 0;
  while (l < r) {
      if (nums[l] < nums[r]) return nums[l];
      if (r === l + 1) return nums[r];
      mid = Math.floor((l + r)/2);
      nums[mid] > nums[r] ? l = mid : r = mid;
  }
  return -1;
};