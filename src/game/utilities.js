export function indexToCoordinates(index) {
  if (!Number.isInteger(index) || index < 0 || index > 63) {
    throw new Error("Invalid index");
  }
  const quotient = Math.floor(index / 8);
  const remainder = index % 8;
  const rank = 8 - quotient;
  const file = String.fromCharCode("a".charCodeAt(0) + remainder);
  return file + rank;
}

export function defaultPieceColorAtRank(rank) {
  if (rank === "1" || rank === "2") {
    return "White";
  } else if (rank === "7" || rank === "8") {
    return "Black";
  } else {
    return null;
  }
}

export function defaultPieceTypeAtFile(file) {
  if (file === "a" || file === "h") {
    return "Rook";
  } else if (file === "b" || file === "g") {
    return "Knight";
  } else if (file === "c" || file === "f") {
    return "Bishop";
  } else if (file === "d") {
    return "Queen";
  } else if (file === "e") {
    return "King";
  }
}
export function defaultPieceAtCoordinates(coordinates) {
  if (
    typeof coordinates !== "string" ||
    coordinates.length !== 2 ||
    !"abcdefgh".includes(coordinates[0]) ||
    !"12345678".includes(coordinates[1])
  ) {
    throw new Error("Invalid coordinates");
  }
  const file = coordinates[0];
  const rank = coordinates[1];
  if (!"1278".includes(rank)) {
    return null;
  } else if (rank === "2" || rank === "7") {
    return `${defaultPieceColorAtRank(rank)} Pawn`;
  } else {
    return `${defaultPieceColorAtRank(rank)} ${defaultPieceTypeAtFile(file)}`;
  }
}

export function isBlackSquare(index) {
  const isEven = (number) => number % 2 === 0;
  const quotient = Math.floor(index / 8);
  if (isEven(quotient)) {
    if (isEven(index)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (isEven(index)) {
      return false;
    } else {
      return true;
    }
  }
}
