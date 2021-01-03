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

const nameToSrc = new Map();

nameToSrc.set("white king", whiteKing);
nameToSrc.set("white queen", whiteQueen);
nameToSrc.set("white rook", whiteRook);
nameToSrc.set("white bishop", whiteBishop);
nameToSrc.set("white knight", whiteKnight);
nameToSrc.set("white pawn", whitePawn);

nameToSrc.set("black king", blackKing);
nameToSrc.set("black queen", blackQueen);
nameToSrc.set("black rook", blackRook);
nameToSrc.set("black bishop", blackBishop);
nameToSrc.set("black knight", blackKnight);
nameToSrc.set("black pawn", blackPawn);

// const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export default class Piece {
  constructor(name) {
    [this.color, this.type] = name.toLowerCase().split(" ");
  }
  get img() {
    return nameToSrc.get(this.color + " " + this.type);
  }
  // id removed due to issue #2
}
