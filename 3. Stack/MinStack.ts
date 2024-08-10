/*
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  Implement the MinStack class:

  MinStack() initializes the stack object.
  void push(int val) pushes the element val onto the stack.
  void pop() removes the element on the top of the stack.
  int top() gets the top element of the stack.
  int getMin() retrieves the minimum element in the stack.
  You must implement a solution with O(1) time complexity for each function.
*/

// 95.51%, 56.64%

class MinStack {

  private data : number[];
  private min : number[];

  constructor() {
      this.data = [];
      this.min = [];
  }

  push(val: number): void {
      this.data.push(val);
      if (this.min.length === 0 || val <= this.min[this.min.length - 1]) this.min.push(val);
  }

  pop(): void {
      if (this.data[this.data.length-1] === this.min[this.min.length - 1]) this.min.pop();
      this.data.pop();
  }

  top(): number {
      return this.data[this.data.length - 1];
  }

  getMin(): number {
      return this.min[this.min.length - 1];
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/