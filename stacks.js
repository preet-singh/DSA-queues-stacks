'use strict';
//STACK implementation 

class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value) { //O(1) time complexity
    if(this.top  === null){
      this.top = new _Node(value, null);
      return this.top;
    }
    const node = new _Node(value, this.top);
    this.top = node;
  }

  pop() {
      const node = this.top;
      this.top = node.next;
      return node.value;
  }

}

function peek(stack){
  return stack.top ? stack.top : 'stack is empty';
}

function isEmpty(stack){
  return stack.top === null ? 'stack is empty' : 'stack is not empty'
}

function display(stack) {
  let result = '';
  let curr = stack.top;
  while (curr !== null) {
    result += curr.value + ', ';
    curr = curr.next;
  }
  return result;
}


function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop('McCoy');
  console.log(display(starTrek));

}

main();