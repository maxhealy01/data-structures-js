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
}
let mbh = new MaxBinaryHeap();
mbh.insert(4);
mbh.insert(6);
mbh.insert(7);
mbh.insert(10);
console.log(mbh);
