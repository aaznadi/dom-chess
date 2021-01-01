import {
  indexToCoordinates,
  defaultPieceAtCoordinates,
  isBlackSquare,
} from "./utilities";
import handleClickOnSquare from "./click";
import Piece from "./piece";

export default function printBoard() {
  const app = document.getElementById("dom-chess");

  const board = document.createElement("div");
  board.classList.add("board");
  app.appendChild(board);

  for (let index = 0; index < 64; index++) {
    const square = document.createElement("div");
    square.classList.add("square");
    if (isBlackSquare(index)) {
      square.classList.add("square-black");
    } else {
      square.classList.add("square-white");
    }
    square.setAttribute("id", indexToCoordinates(index));
    board.appendChild(square);
    square.addEventListener("click", handleClickOnSquare);

    const defaultPiece = defaultPieceAtCoordinates(indexToCoordinates(index));
    if (defaultPiece !== null) {
      const piece = new Piece(defaultPiece);
      square.innerHTML = piece.img;
      square.firstElementChild.classList.add("piece");
      square.firstElementChild.setAttribute("id", piece.id);
      square.firstElementChild.classList.add("piece");
      square.firstElementChild.removeAttribute("height");
      square.firstElementChild.removeAttribute("width");
    }
  }
}
