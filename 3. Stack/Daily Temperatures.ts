/*
  Given an array of integers temperatures represents the daily temperatures,
  return an array answer such that answer[i] is the number of days you have to wait
  after the ith day to get a warmer temperature. If there is no future day for which
  this is possible, keep answer[i] == 0 instead.
*/

// 15.91%, 5.59%

function dailyTemperatures(temperatures: number[]): number[] {
  let result: number[] = Array(temperatures.length).fill(0);
  let stack: [number, number][] = [];
  let stackTemp: number, stackIndex: number;
  
  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
          [stackTemp, stackIndex] = stack.pop()!;
          result[stackIndex] = i - stackIndex;
      }
      stack.push([temperatures[i], i]);
  }

  return result;
};
