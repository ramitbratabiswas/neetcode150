/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric
characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise
*/

// 62 ms

function isPalindrome(s: string): boolean {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) return false;
    }
    return true;
};