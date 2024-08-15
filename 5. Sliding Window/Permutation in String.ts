/*
  Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

  In other words, return true if one of s1's permutations is the substring of s2.
*/

// 85.05%, 83.82%

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  let n1 = s1.length;
  let n2 = s2.length;

  let s1counts: number[] = new Array<number>(26).fill(0);
  let s2counts: number[] = new Array<number>(26).fill(0);

  for (let i = 0; i < n1; i++) {
      s1counts[getIndex(s1[i])]++;
      s2counts[getIndex(s2[i])]++;
  }

  if (arraysEqual(s1counts, s2counts)) return true;

  for (let i = 0; i < n2 - n1; i++) {
      s2counts[getIndex(s2[i + n1])]++;
      s2counts[getIndex(s2[i])]--;
      if (arraysEqual(s1counts, s2counts)) return true;
  }

  return false;
};

function getIndex(s: string) {
  return (s.charCodeAt(0) - "a".charCodeAt(0));
}

function arraysEqual(a1: number[], a2: number[]) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false;
  }
  return true;
}