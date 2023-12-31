class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	BFS() {
		if (!this.root) {
			return null;
		}
		let nodes = [];
		let queue = [];
		queue.push(this.root);

		while (queue.length) {
			let current = queue.shift();
			nodes.push(current.val);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return nodes;
	}
	DFSPostOrder() {
		if (!this.root) return null;
		let visited = [];

		const visit = (node) => {
			if (node.left) visit(node.left);
			if (node.right) visit(node.right);
			visited.push(node.val);
		};
		visit(this.root);
		return visited;
	}
	DFSInOrder() {
		if (!this.root) return null;
		let visited = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			visited.push(node.val);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return visited;
	}
	DFSPreOrder() {
		if (!this.root) return null;
		let visited = [];

		const visit = (node) => {
			visited.push(node.val);
			if (node.left) visit(node.left);
			if (node.right) visit(node.right);
		};
		visit(this.root);
		return visited;
	}
	insert(val) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let comp = this.root;
		while (true) {
			if (val === comp.val) return undefined;
			if (comp.val < val) {
				if (!comp.right) {
					comp.right = newNode;
					return this;
				}
				comp = comp.right;
			} else {
				if (!comp.left) {
					comp.left = newNode;
					return this;
				}
				comp = comp.left;
			}
		}
	}
	find(val) {
		if (!this.root) return false;
		let current = this.root,
			found = false;
		while (current && !found) {
			if (current.val > val) {
				current = current.left;
			} else if (current.val < val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return false;
		return current;
	}
}

var john = new BinarySearchTree();
john.insert(10);
john.insert(15);
john.insert(6);
john.insert(3);
john.insert(8);
john.insert(20);
console.log("HERE!", john.BFS());
console.log("ANd!!!...", john.DFSPreOrder());
console.log("PostOrder", john.DFSPostOrder());
console.log("Inorder", john.DFSInOrder());
