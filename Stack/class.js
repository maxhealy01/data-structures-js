class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		let newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}
	dequeue() {
		let removed = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = removed.next;
		this.size--;
		return removed;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.size++;
		return this;
	}
	pop() {
		if (this.length === 0) return null;
		let removed = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = removed.next;
		this.size--;
		return removed.val;
	}
}
// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop(), stack.size);
// console.log(stack.first, stack.size);
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
q.dequeue();
q.dequeue();
console.log(q);

q.dequeue();
console.log(q);
