/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

// 76 ms

function topKFrequent(nums: number[], k: number): number[] {
    let hashmap: { [key: number] : number} = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]]) {
            hashmap[nums[i]]++;
        } else {
            hashmap[nums[i]] = 1;
        }
    }
    let entries = Object.entries(hashmap);
    entries.sort((a,b) => b[1] - a[1]);
    return entries.slice(0, k).map((entry) => Number(entry[0]));
};