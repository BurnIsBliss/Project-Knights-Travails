class GraphPoints {
	constructor() {
		console.log("Graph vertices are initialized.");
		this.listOfEdges = this.listCreation();
	}

	listCreation = () => {
		let mapObject = new Map();
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				let tempArray = [];
				if (i - 1 >= 0 && j + 2 <= 7) tempArray.push(i - 1, j + 2);
				if (i - 1 >= 0 && j - 2 >= 0) tempArray.push(i - 1, j - 2);
				if (i + 1 <= 7 && j + 2 <= 7) tempArray.push(i + 1, j + 2);
				if (i + 1 <= 7 && j - 2 >= 0) tempArray.push(i + 1, j - 2);
				if (j - 1 >= 0 && i - 2 >= 0) tempArray.push(i - 2, j - 1);
				if (j - 1 >= 0 && i + 2 <= 7) tempArray.push(i + 2, j - 1);
				if (j + 1 <= 7 && i - 2 >= 0) tempArray.push(i - 2, j + 1);
				if (j + 1 <= 7 && i + 2 <= 7) tempArray.push(i + 2, j + 1);
				mapObject.set([i, j], tempArray);
			}
		}
		return mapObject;
	};

	printEdgeValues() {
		for (const [key, value] of this.listOfEdges) {
			console.log(`${key}: ${value}`);
		}
	}

	knightMoves(start, end) {}
}

export { GraphPoints };
