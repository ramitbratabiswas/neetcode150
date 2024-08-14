// Given a string s, find the length of the longest substring without repeating characters.

// 69.05%, 55.79%

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let l = 0, r = 1, max = 1;
  while (r < s.length) {
      while (r < s.length && !(s.substring(l, r)).includes(s[r])) {
          r++;
          max = Math.max(max, r - l);
      }
      while (r < s.length && (s.substring(l, r)).includes(s[r])) {
          l++;
      }
  }
  return max;
};