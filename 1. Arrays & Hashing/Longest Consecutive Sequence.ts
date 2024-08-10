/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

// 79.07%, 31.49%

function longestConsecutive(nums: number[]): number {
  let numSet: Set<number> = new Set(nums);
  let maxSeqLen = 0;

  for (let num of numSet) {
      // Start counting sequence only if num is the start of a sequence
      if (!numSet.has(num - 1)) {
          let currentNum = num;
          let seqLen = 1;

          // Count the sequence
          while (numSet.has(currentNum + 1)) {
              currentNum++;
              seqLen++;
          }

          maxSeqLen = Math.max(maxSeqLen, seqLen);
      }
  }

  return maxSeqLen;
}