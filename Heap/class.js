class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(value) {
		let values = this.values;
		values.push(value);
		let length = values.length;

		if (length === 1) return values;

		let valueIndex = length - 1;
		while (valueIndex > 0) {
			let parentIndex = Math.floor((valueIndex - 1) / 2);
			let parent = values[parentIndex];
			if (!parent) console.log("true!");
			if (value <= parent) break;

			values[parentIndex] = value;
			values[valueIndex] = parent;
			valueIndex = parentIndex;
		}
		return values;
	}
	removeMax() {
		let values = this.values;
		let max = values[0];

		values[0] = values.pop();

		let currentIndex = 0;
		while (true) {
			let current = values[currentIndex];

			let leftChildIndex = currentIndex ** 2 + 1,
				rightChildIndex = currentIndex ** 2 + 2,
				leftChild,
				rightChild;

			if (leftChildIndex < values.length) {
				leftChild = values[leftChildIndex];
				if (leftChild > current) {
					values[currentIndex] = values[leftChildIndex];
					values[leftChildIndex] = current;
					currentIndex = leftChildIndex;
				}
			}
			if (rightChildIndex < values.length) {
				rightChild = values[rightChildIndex];
				if (
					(rightChild > current && current !== leftChildIndex) ||
					rightChild > leftChild
				) {
					values[currentIndex] = values[rightChildIndex];
					values[rightChildIndex] = current;
					currentIndex = rightChildIndex;
				}
			}
			if (current === values[currentIndex]) break;
		}
		return max;
	}
}
let mbh = new MaxBinaryHeap();
mbh.insert(4);
mbh.insert(6);
mbh.insert(7);
mbh.insert(10);
console.log(mbh.removeMax(), mbh);

console.log(mbh.removeMax(), mbh);
// console.log(mbh);
