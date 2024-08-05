/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let mapStrs = strs.map((str) => `${str.length}#${str}`);
        console.log(mapStrs.join());
        return mapStrs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let numLetters = 0;
        let numLength = 0;
        let ansArr = [];
        while (i < str.length) {
            numLength = 0;
            while(str[i + numLength] != "#") {
                numLength++;
            }
            numLetters = Number(str.substring(i, i + numLength));
            ansArr.push(str.substring(i + numLength + 1, i + numLetters + numLength + 1));
            i = i + numLetters + numLength + 1;
            console.log("i: " + i);
        }
        return ansArr;
    }
}
