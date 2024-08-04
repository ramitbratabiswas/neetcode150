/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

// 284 ms (horrible)

function isAnagram(s: string, t: string): boolean {
    let newT: string = t;
    let found:boolean = false;
    if (s.length !== t.length) return false;
    for (let i: number = 0; i < s.length; i++) {
        for (let j: number = 0; j < newT.length; j++) {
            found = false;
            if (s[i] === newT[j]) {
                newT = newT.slice(0, j).concat(newT.slice(j + 1, newT.length));
                found = true;
                break;
            }
        }
        if (found === false) return false;
    }
    return (newT.length === 0);
};