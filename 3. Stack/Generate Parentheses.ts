/*
  Given n pairs of parentheses, write a function to generate all
  combinations of well-formed parentheses.
*/

// 16.95%, 25.66%

function generateParenthesis(n: number): string[] {
    
  let stack : string[] = [];
  let res : string[] = [];

  function backtrack(openN : number, closedN : number) : void {
      if (openN === closedN && closedN === n) {
          res.push(stack.join(""));
          return;
      }

      if (openN < n) {
          stack.push("(");
          backtrack(openN + 1, closedN);
          stack.pop();
      }

      if (closedN < openN) {
          stack.push(")");
          backtrack(openN, closedN + 1);
          stack.pop();
      }
  }

  backtrack(0, 0);
  return res;

};