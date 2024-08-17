/*
  Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
  The guards have gone and will come back in h hours.

  Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas
  and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead
  and will not eat any more bananas during this hour.

  Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

  Return the minimum integer k such that she can eat all the bananas within h hours.
*/

// 93.96%, 43.69%

function minEatingSpeed(piles: number[], h: number): number {
  let max: number = Math.max(...piles);
  if (h === piles.length) return max;
  let l = 1, mid = 0, r = max;
  let res = r;
  
  while (l <= r) {
      mid = Math.floor((l + r) / 2);
      if (getRequiredH(piles, mid) <= h) {
          res = Math.min(res, mid);
          r = mid - 1;
      } else { 
          l = mid + 1;
      }
  }

  return res;
};

function getRequiredH(piles: number[], n: number) {
  let h: number = 0;

  for (let num of piles) {
      h += Math.ceil(num / n);
  }

  return h;
}
