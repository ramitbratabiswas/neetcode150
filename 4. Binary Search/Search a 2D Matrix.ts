

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