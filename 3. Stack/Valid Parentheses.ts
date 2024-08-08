/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

// 99.18%, 37.49%

function isValid(s: string): boolean {
  const legend : {[key : string] : string} = {
      ')':'(',
      '}':'{',
      ']':'['
  };
  let stack : string[] = [];
  for (let i = 0; i < s.length; i++) {
      if (legend[s[i]] && stack[stack.length - 1] === legend[s[i]]) {
          stack.pop();
      } else {
          stack.push(s[i]);
      }
  }

  return (stack.length === 0);
};