import handleClickOnSquare from "./click";
import Piece from "./piece";
import {
  defaultPieceAtCoordinates,
  indexToCoordinates,
  isBlackSquare,
} from "./utilities";

function coordinatesToIndex(coordinates) {
  const [file, rank] = coordinates;
  const x = file.charCodeAt(0) - "a".charCodeAt(0);
  const y = 8 - Number(rank);
  return 8 * y + x;
}

export default class Board {
  constructor() {
    // set default position
    this.position = [];
    for (let i = 0; i < 64; i++) {
      this.position.push(defaultPieceAtCoordinates(indexToCoordinates(i)));
    }

    // create the board element
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");

    // create the squares
    for (let i = 0; i < 64; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      if (isBlackSquare(i)) {
        square.classList.add("square-black");
      } else {
        square.classList.add("square-white");
      }
      square.setAttribute("id", indexToCoordinates(i));

      // TO FIXX~~~
      square.addEventListener("click", (event) =>
        handleClickOnSquare(event, this)
      );

      // append to the board
      boardElement.appendChild(square);
    }

    // create the pieces
    for (let i = 0; i < 64; i++) {
      const defaultPiece = defaultPieceAtCoordinates(indexToCoordinates(i));
      if (defaultPiece !== null) {
        const coordinates = indexToCoordinates(i);
        const type = defaultPiece.split(" ")[1];
        const color = defaultPiece.split(" ")[0];
        const piece = new Piece(type, color, coordinates);
        // append to board
        boardElement.appendChild(piece.element);
      }
    }

    this.element = boardElement;
  }
  getPieceAt(coordinates) {
    return this.position[coordinatesToIndex(coordinates)];
  }
  setPieceAt(piece, coordinates) {
    this.position[coordinatesToIndex(coordinates)] = piece;
  }
  removePieceAt(coordinates) {
    this.position[coordinatesToIndex(coordinates)] = null;
  }
  render() {
    const app = document.getElementById("dom-chess");
    app.appendChild(this.element);
  }
}
