import whiteKing from "../pieces/white_king.svg";
import whiteQueen from "../pieces/white_queen.svg";
import whiteRook from "../pieces/white_rook.svg";
import whiteBishop from "../pieces/white_bishop.svg";
import whiteKnight from "../pieces/white_knight.svg";
import whitePawn from "../pieces/white_pawn.svg";
import blackKing from "../pieces/black_king.svg";
import blackQueen from "../pieces/black_queen.svg";
import blackRook from "../pieces/black_rook.svg";
import blackBishop from "../pieces/black_bishop.svg";
import blackKnight from "../pieces/black_knight.svg";
import blackPawn from "../pieces/black_pawn.svg";

const pieceSVG = new Map();
pieceSVG.set("white king", whiteKing);
pieceSVG.set("white queen", whiteQueen);
pieceSVG.set("white rook", whiteRook);
pieceSVG.set("white bishop", whiteBishop);
pieceSVG.set("white knight", whiteKnight);
pieceSVG.set("white pawn", whitePawn);
pieceSVG.set("black king", blackKing);
pieceSVG.set("black queen", blackQueen);
pieceSVG.set("black rook", blackRook);
pieceSVG.set("black bishop", blackBishop);
pieceSVG.set("black knight", blackKnight);
pieceSVG.set("black pawn", blackPawn);

export default class Piece {
  constructor(type, color, coordinates) {
    this.type = type;
    this.color = color;
    this.coordinates = coordinates;

    // create the svg element
    const svgParent = document.createElement("div");
    const pieceName = color.toLowerCase() + " " + type.toLowerCase();
    svgParent.innerHTML = pieceSVG.get(pieceName);
    const pieceSVGElement = svgParent.firstChild;

    // add class
    pieceSVGElement.classList.add("piece");

    // add id
    const [file, rank] = coordinates;
    let pieceId;
    if (rank === "2" || rank === "7") {
      // 'white-d-pawn'
      pieceId = `${this.color}-${file}-${this.type}`;
    } else if (file !== "d" && file !== "e") {
      // 'black-queen-rook'
      const side = "abcd".includes(file) ? "queen" : "king";
      pieceId = `${this.color}-${side}-${this.type}`;
    } else {
      // 'white-king'
      pieceId = `${this.color}-${this.type}`;
    }
    pieceSVGElement.setAttribute("id", pieceId);

    // remove height and width (!!!!! DO THIS ON THE ACTUAL SVGs)
    pieceSVGElement.removeAttribute("height");
    pieceSVGElement.removeAttribute("width");

    // set initial position
    const PIECE_WIDTH = 60;
    const BOARD_PADDING = 10;
    const fileToLeft = (file) => file.charCodeAt(0) - "a".charCodeAt(0);
    const rankToTop = (rank) => 8 - Number(rank);
    const left = fileToLeft(file) * PIECE_WIDTH + BOARD_PADDING + "px";
    const top = rankToTop(rank) * PIECE_WIDTH + BOARD_PADDING + "px";
    pieceSVGElement.style.left = left;
    pieceSVGElement.style.top = top;

    // set the field element
    this.element = pieceSVGElement;
  }

  // move
  moveTo(newCoordinates) {
    this.coordinates = newCoordinates;
    const [file, rank] = newCoordinates;
    const left = fileToLeft(file) * 60 + "px";
    const top = rankToTop(rank) * 60 + "px";
    this.element.style.left = left;
    this.element.style.top = top;
  }

  // remove
  remove() {
    this.element.remove();
  }
}
