class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.tail) return undefined;

		let removed = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removed.prev;
			this.tail.next = null;
			removed.prev = null;
		}
		this.length--;
		return removed;
	}
	shift() {
		if (!this.head) return undefined;

		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return list;
	}
	get(index) {
		if (index > this.length || index < 0) return null;
		let current;
		let count = 0;

		if (index < Math.ceil(this.length / 2)) {
			current = this.head;
			while (count < index) {
				current = current.next;
				count++;
			}
		} else {
			let distance = this.length - index;
			current = this.tail;
			while (count < distance) {
				current = current.prev;
				count++;
			}
		}
		return current;
	}
	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		let newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;
		(afterNode.prev = newNode), (newNode.next = afterNode);
		(beforeNode.next = newNode), (newNode.prev = beforeNode);
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removed = this.get(index);

		let prev = removed.prev;
		let next = removed.next;
		prev.next = next;
		next.prev = prev;

		(removed.next = null), (removed.prev = null);
		this.length--;
		return removed;
	}
	reverse() {
		if (this.length <= 1) return this;
		let current = this.head;
		(this.head = this.tail), (this.tail = current);

		for (let i = 0; i < this.length; i++) {
			let next = current.next;
			[current.next, current.prev] = [current.prev, current.next];
			current = next;
		}
		return this;
	}

	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.print();
list.reverse();
list.print();
