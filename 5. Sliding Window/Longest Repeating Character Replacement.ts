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