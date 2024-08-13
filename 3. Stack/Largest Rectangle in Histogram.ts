/*

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
return the area of the largest rectangle in the histogram.

*/

// 9.09%, 17.04%

function largestRectangleArea(heights: number[]): number {
    
  let stack: [number, number][] = [];
  let maxArea: number = 0;
  let start, index, height;

  for (let i = 0; i < heights.length; i++) {
      start = i;
      while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
          [index, height] = stack.pop();
          maxArea = Math.max(maxArea, height * (i - index));
          start = index;
      }
      stack.push([start, heights[i]]);
  }

  for (let i = 0; i < stack.length; i++) {
      maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
  }

  return maxArea;
};