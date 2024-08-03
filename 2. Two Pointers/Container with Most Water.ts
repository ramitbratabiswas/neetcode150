/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
*/

// time: 75.48%, space: 45.50%

function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let minHeight : number, area : number, maxArea : number = 0;
      while (l < r) {
          minHeight = (height[l] < height[r]) ? height[l] : height[r];
          area = minHeight * (r - l);
          if (area > maxArea) maxArea = area;
          if (height[l] < height[r]) {
              l++;
              while (l > r && height[l - 1] >= height[l]) l++;
          } else {
              r--;
              while (l > r && height[r + 1] >= height[r]) r--;
          }
          
      }
  return maxArea;
};