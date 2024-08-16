
// 73.55%, 43.05%

function minWindow(s: string, t: string): string {
  if (s.length < t.length || t === "") return "";
  let l: number = 0, r: number = 0;

  let countT: Map<string, number> = new Map<string, number>();
  let window: Map<string, number> = new Map<string, number>();
  let char: string = "";
  let res: [number, number] = [-1, -1], minLen: number = 1000000;

  for (let c of t) {
      countT.set(c, (countT.get(c) || 0) + 1);
  }

  let have: number = 0, need: number = countT.size;

  for (let r = 0; r < s.length; r++) {
      char = s[r];
      window.set(char, (window.get(char) || 0) + 1);

      if (countT.has(char) && window.get(char) === countT.get(char)) have++;

      while (have === need) {
          if ((r - l + 1) < minLen) {
              minLen = r - l + 1;
              res = [l, r];
          }
          window.set(s[l], window.get(s[l])! - 1);
          if (countT.has(s[l]) && window.get(s[l])! < countT.get(s[l])!) have--;
          l++;
      }
  }

  [l, r] = res;
  return (minLen < 1000000) ? s.substring(l, r + 1) : "";
}
