import { GraphPoints } from "./main.js";

const graphObject = new GraphPoints();
graphObject.knightMoves([0, 0], [3, 3]);
graphObject.knightMoves([3, 3], [0, 0]);
graphObject.knightMoves([0, 0], [7, 7]);
graphObject.knightMoves([3, 3], [4, 3]);
graphObject.knightMoves([0, 0], [0, 0]);
