/*
  You are given a string s and an integer k. You can choose any character of
  the string and change it to any other uppercase English character.
  You can perform this operation at most k times.

  Return the length of the longest substring containing the same letter you
  can get after performing the above operations.
*/

// 69.93%, 98.44%

function characterReplacement(s: string, k: number): number {
  let count: {[key: number] : number} = {};
  let res = 0;

  let l = 0, maxf = 0;
  for (let r = 0; r < s.length; r++) {
      count[s[r]] = 1 + (count[s[r]] ? count[s[r]] : 0);
      maxf = Math.max(maxf, count[s[r]]);

      while (r - l + 1 > k + maxf) {
          count[s[l]] -= 1;
          l++;
      }

      res = Math.max(res, r - l + 1);
  }
  return res;
};