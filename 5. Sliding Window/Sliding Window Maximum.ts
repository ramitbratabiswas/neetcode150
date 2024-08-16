/*
  You are given an array of integers nums, there is a sliding window of size k
  which is moving from the very left of the array to the very right. You can only see
  the k numbers in the window. Each time the sliding window moves right by one position.

  Return the max sliding window.
*/

// 49.60%, 19.60%

function maxSlidingWindow(nums: number[], k: number): number[] {

  let res: number[] = [];
  let q: number[] = [];
  let l = 0, r = 0;
  
  while (r < nums.length) {
      while (q.length > 0 && nums[q[q.length-1]] < nums[r]) {
          q.pop();
      }
      q.push(r);

      if (l > q[0]) q.shift();

      if (r + 1 >= k) {
          res.push(nums[q[0]]);
          l++;
      }
      r++;
  }

  return res;
};