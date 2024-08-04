"""
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

"""

# Brute force solution(exceeds time limit)

class Solution:

    def isAnagram(self, s: str, t: str) -> bool:
        sCount, tCount = {}, {}
        if len(s) != len(t):
            return False
        for i in range(len(s)):
            sCount[s[i]] = 1 + sCount.get(s[i], 0)
            tCount[t[i]] = 1 + tCount.get(t[i], 0)
        
        return sCount == tCount

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        finalArr = []
        while strs:
            tempArr = [strs.pop(0)]
            i = 0
            while i < len(strs):
                if self.isAnagram(tempArr[0], strs[i]): 
                    tempArr.append(strs.pop(i))
                else:
                    i += 1
            finalArr.append(tempArr)
        return finalArr

# 97 ms

class Solution:

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:  
        hashmap = defaultdict(list)

        for word in strs:
            count = [0] * 26
            for char in word:
                count[ord(char) - ord('a')] += 1
            hashmap[tuple(count)].append(word)
        
        return hashmap.values()