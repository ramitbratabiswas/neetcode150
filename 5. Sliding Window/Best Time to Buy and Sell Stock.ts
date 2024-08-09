/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// 69.05%, 43.92%

function maxProfit(prices: number[]): number {
  let l = 0, r = 1;
  let max = 0;
  let diff = 0;
  while (r < prices.length) {
      diff = prices[r] - prices[l];
      if (max < diff) max = diff;
      if (diff <= 0) l = r;
      r++;
  }
  return max;
};