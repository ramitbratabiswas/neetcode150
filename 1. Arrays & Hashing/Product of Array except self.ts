/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// 106 ms

function productExceptSelf(nums: number[]): number[] {
    let retArray : number[] = Array(nums.length).fill(1);

    let prefix : number = 1;

    for (let i = 0; i < nums.length; i++) {
        retArray[i] = prefix;
        prefix *= nums[i];
    }

    let postfix : number = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        retArray[j] *= postfix;
        postfix *= nums[j];
    }

    return retArray;
};