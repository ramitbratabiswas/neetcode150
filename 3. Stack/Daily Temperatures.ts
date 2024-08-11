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
