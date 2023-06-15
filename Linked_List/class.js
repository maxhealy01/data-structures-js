class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	traverse() {
		let current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		console.log(this.length, current);
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}
	unshift(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	get(index) {
		if (index >= this.length || index < 0) {
			return null;
		}
		let count = 0;
		let current = this.head;
		while (count < index) {
			current = current.next;
			count++;
		}
		return current;
	}
	set(index, value) {
		let node = this.get(index);
		if (node) {
			node.value = value;
			return true;
		}
		return false;
	}
	insert(index, value) {
		if (index > this.length || index < 0) return false;
		if (index === 0) {
			return !!this.unshift(value);
		}
		if (index === this.length) {
			return !!this.push(value);
		}

		let newNode = new Node(value);
		let prev = this.get(index - 1);
		let oldNode = prev.next;
		prev.next = newNode;
		newNode.next = oldNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index > this.length || index < 0) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let before = this.get(index - 1);
		let removed = before.next;
		before.next = removed.next;
		this.length--;
		return removed;
	}
	reverse() {
		if (this.length <= 1) return this;

		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		let prev = null;

		while (current) {
			let next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return this;
	}
	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.value);
			current = current.next;
		}
		console.log(arr);
	}
}

let list = new SinglyLinkedList();
list.push("YO!");
list.push("GOODBYE!");
list.push("GOeODBYE!");

list.push("Okay!");
list.push(" No wayBYE!");
list.push(" All good!");
list.push("GOODfBgYE!");
list.push("GOODB hhhhh    gfhgfE!");
// list.unshift("Eyyy!");
// list.unshift("Bruh!!");
list.print();
list.reverse();
list.print();
list.reverse();
list.print();
