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
				for (let k = i - 1; k < i + 2; k++) {
					if (k < 0 || k > 7) continue;
					for (let l = j - 1; l < j + 2; l++) {
						if (l < 0 || l > 7) continue;
						else if (k === i && l === j) continue;
						else tempArray.push([k, l]);
					}
				}
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
}

export { GraphPoints };
