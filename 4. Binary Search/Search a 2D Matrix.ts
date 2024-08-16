/*
  You are given an m x n integer matrix matrix with the following two properties:

  Each row is sorted in non-decreasing order.
  The first integer of each row is greater than the last integer of the previous row.
  Given an integer target, return true if target is in matrix or false otherwise.

  You must write a solution in O(log(m * n)) time complexity.
*/

// 96.58%, 18.96%

function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length, n = matrix[0].length;
  
  let l = 0, mid = 0, r = m * n - 1;
  let mr, mc;

  while (l <= r) {
      mid = Math.floor((l + r) / 2);
      [mr, mc] = mapTo2d(mid, n);
      if (matrix[mr][mc] === target) return true;
      if (matrix[mr][mc] < target) l = mid + 1;
      if (matrix[mr][mc] > target) r = mid - 1;
  }

  return false;
};

function mapTo2d(index: number, n: number) {
  return [Math.floor(index / n), index % n];
};