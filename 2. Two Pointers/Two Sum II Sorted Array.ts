/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space
*/

// 331 ms

function twoSum(numbers: number[], target: number): number[] {
    let diff = 0;
    let count = 0;
    let res = -1;
    while (1) {
        diff = target - numbers[0];
        res = binarySearch(numbers, diff);
        console.log(res);
        if (res != -1) {
            return [count + 1, count + res + 1];
        }
        count++;
        numbers.shift();
    }
    return [];
};

function binarySearch(array: number[], target: number) {
    let l = 0;
    let r = array.length;
    let mid = -1;

    while (l < r) {
        mid = Math.floor((l + r) / 2);
        if (array[mid] === target) return mid;
        if (array[mid] > target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return -1;
};