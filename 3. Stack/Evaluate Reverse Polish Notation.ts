/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

*/

// 88.01%, 49.87%

function evalRPN(tokens: string[]): number | undefined {
  let stack : number[] = [];
  for (let i = 0; i < tokens.length; i++) {
      if ("+-*/".includes(tokens[i])) {
          stack.push(operate(stack, tokens[i]));
      } else {
          stack.push(Number(tokens[i]));
      }
  }
  return stack.pop();
};

function operate(stack, sign) {
  let num1 = stack.pop();
  let num2 = stack.pop();
  let div = 0;
  switch (sign) {
      case "+":
          return num2 + num1;
      case "-":
          return num2 - num1;
      case "*":
          return num2 * num1;
      case "/":
          div = num2 / num1;
          return div > 0 ? Math.floor(div) : Math.ceil(div);
      default:
          return 0;
  }
}