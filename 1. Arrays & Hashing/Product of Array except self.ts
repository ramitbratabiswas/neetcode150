/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// 128 ms

function productExceptSelf(nums: number[]): number[] {
    let retArray : number[] = Array.from({length: nums.length});
    let product : number = 1;
    let cache : { [key: number] : number } = {}

    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            retArray[i] = cache[nums[i]];
            continue;
        }
        product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            product *= nums[j];
        }
        retArray[i] = product;
        cache[nums[i]] = product;
    }

    return retArray;

};