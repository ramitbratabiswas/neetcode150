function longestConsecutive(nums: number[]): number {
  let numSet : Set<number> = new Set<number>(nums);
  let seqLen = 0, maxSeqLen = 0, curr = 0;
  for (let i = 0; i < nums.length; i++) {
      if (!numSet.has(nums[i] - 1)) {
          seqLen = 1;
          curr = nums[i];
          while (numSet.has(curr + 1)) {
              seqLen++;
              curr++;
          }
      }
      if (seqLen > maxSeqLen) maxSeqLen = seqLen;
  }
  return maxSeqLen;
};