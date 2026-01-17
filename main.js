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

	knightMoves(start, end) {
		let visitedNodes = [],
			queue = [],
			startCopy,
			k = 0;
		start = startCopy = `[${start[0]}, ${start[1]}]`;
		end = `[${end[0]}, ${end[1]}]`;
		while (true) {
			visitedNodes.push(start);
			for (let value of this.listOfEdges.get(start)) {
				if (value === end) {
					k = 1;
					break;
				}
				if (!visitedNodes.includes(value) && !queue.includes(value))
					queue.push(value);
			}
			if (k === 1) break;
			start = queue.shift();
		}
		this.printOutput(visitedNodes, startCopy, end);
	}

	printOutput(array, start, end) {
		let movesArray = [end];
		array.reverse();
		while (start !== end) {
			const values = this.listOfEdges.get(end);
			for (const value of values) {
				if (array.includes(value) && !movesArray.includes(value)) {
					movesArray.push(value);
					array = array.slice(array.indexOf(value));
					break;
				}
			}
			end = movesArray[movesArray.length - 1];
		}
		console.log(
			`You made it in ${movesArray.length - 1} moves! Here's your path:`,
		);
		for (const value of movesArray.reverse()) console.log(value);
	}
}

export { GraphPoints };
