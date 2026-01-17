class GraphPoints {
	constructor() {
		this.listOfEdges = this.listCreation();
	}

	listCreation = () => {
		let mapObject = new Map();
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				let tempArray = [];
				if (i - 1 >= 0 && j + 2 <= 7)
					tempArray.push(`[${i - 1}, ${j + 2}]`);
				if (i - 1 >= 0 && j - 2 >= 0)
					tempArray.push(`[${i - 1}, ${j - 2}]`);
				if (i + 1 <= 7 && j + 2 <= 7)
					tempArray.push(`[${i + 1}, ${j + 2}]`);
				if (i + 1 <= 7 && j - 2 >= 0)
					tempArray.push(`[${i + 1}, ${j - 2}]`);
				if (j - 1 >= 0 && i - 2 >= 0)
					tempArray.push(`[${i - 2}, ${j - 1}]`);
				if (j - 1 >= 0 && i + 2 <= 7)
					tempArray.push(`[${i + 2}, ${j - 1}]`);
				if (j + 1 <= 7 && i - 2 >= 0)
					tempArray.push(`[${i - 2}, ${j + 1}]`);
				if (j + 1 <= 7 && i + 2 <= 7)
					tempArray.push(`[${i + 2}, ${j + 1}]`);
				mapObject.set(`[${i}, ${j}]`, tempArray);
			}
		}
		return mapObject;
	};

	printEdgeValues() {
		// for (const [key, value] of this.listOfEdges) {
		// 	console.log(`${key}: ${value}`);
		// }
		let key;
		// for (key of this.listOfEdges.keys()) {
		// }
		key = "[6, 7]";
		// console.log(typeof key, typeof [7, 7], key);
		// // if (key === [7, 7]) print(true);
		console.log(this.listOfEdges);
		// console.log(this.listOfEdges.get(key));
		// for (const l in this.listOfEdges.keys()) if (l === key) console.log(l);
	}

	knightMoves(start, end) {
		// Need to add base condition if wrong co-ordinates are given
		let totalMoves = 0;
		let visitedNodes = [],
			queue = [];
		start = `[${start[0]}, ${start[1]}]`;
		end = `[${end[0]}, ${end[1]}]`;
		while (start !== end) {
			visitedNodes.push(start);
			for (let value of this.listOfEdges.get(start)) {
				if (!visitedNodes.includes(value)) queue.push(value);
			}
			start = queue.shift();
		}
		console.log(visitedNodes);
	}
}

export { GraphPoints };
