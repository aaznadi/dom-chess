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
      // issue #2
      // if is pawn: rank 2 or 7
      //    id = color + file + type
      // if is piece other than king or queen: rank 1 or 8
      //    id = color + side + type
      const file = indexToCoordinates(index)[0];
      const rank = indexToCoordinates(index)[1];
      let pieceId;
      if (rank === "2" || rank === "7") {
        // pawns
        pieceId = `${piece.color}-${file}-${piece.type}`;
      } else if (file !== "d" && file !== "e") {
        //pieces other than king or queen
        const side = "abcd".includes(file) ? "queen" : "king";
        pieceId = `${piece.color}-${side}-${piece.type}`;
      }
      square.firstElementChild.setAttribute("id", pieceId);
      square.firstElementChild.classList.add("piece");
      square.firstElementChild.removeAttribute("height");
      square.firstElementChild.removeAttribute("width");
    }
  }
}
