// Scope: set of squares which a piece can move to
// Abstract scope: scope if the board were empty
// Concrete scope: scope in the current board

const FILES = "abcdefgh";
const RANKS = "12345678";

const increaseFileBy = (file, i) => String.fromCharCode(file.charCodeAt(0) + i);
const increaseRankBy = (rank, i) => String(Number(rank) + i);

const isLegal = (file, rank) => FILES.includes(file) && RANKS.includes(rank);

const isValidCoordinates = (coordinates) => {
  return (
    coordinates.length === 2 &&
    FILES.includes(coordinates[0]) &&
    RANKS.includes(coordinates[1])
  );
};

export function getRookAbstractScope(coordinates) {
  if (!isValidCoordinates(coordinates)) {
    throw new Error("Invalid coordinates");
  }
  const scope = [];
  const [file0, rank0] = coordinates;
  let file, rank;
  let scopeLine = [];
  for (let i of [1, -1]) {
    file = increaseFileBy(file0, i);
    while (isLegal(file, rank0)) {
      scopeLine.push(file + rank0);
      file = increaseFileBy(file, i);
    }
    if (scopeLine.length !== 0) {
      scope.push(scopeLine);
      scopeLine = [];
    }

    rank = increaseRankBy(rank0, i);
    while (isLegal(file0, rank)) {
      scopeLine.push(file0 + rank);
      rank = increaseRankBy(rank, i);
    }
    if (scopeLine.length !== 0) {
      scope.push(scopeLine);
      scopeLine = [];
    }
  }
  return scope;
}

export function getBishopAbstractScope(coordinates) {
  if (!isValidCoordinates(coordinates)) {
    throw new Error("Invalid coordinates");
  }
  const scope = [];
  const [file0, rank0] = coordinates;
  let file, rank;
  let scopeLine = [];
  for (let i of [-1, 1]) {
    for (let j of [-1, 1]) {
      file = increaseFileBy(file0, i);
      rank = increaseRankBy(rank0, j);
      while (isLegal(file, rank)) {
        scopeLine.push(file + rank);
        file = increaseFileBy(file, i);
        rank = increaseRankBy(rank, j);
      }
      if (scopeLine.length !== 0) {
        scope.push(scopeLine);
        scopeLine = [];
      }
    }
  }
  return scope;
}

export function getQueenAbstractScope(coordinates) {
  return getRookAbstractScope(coordinates).concat(
    getBishopAbstractScope(coordinates)
  );
}

export function getKingAbstractScope(coordinates) {
  if (!isValidCoordinates(coordinates)) {
    throw new Error("Invalid coordinates");
  }
  const scope = [];
  const [file0, rank0] = coordinates;
  let file, rank;
  let scopeLine = [];
  for (let i of [-1, 0, 1]) {
    for (let j of [-1, 0, 1]) {
      if (i !== 0 || j !== 0) {
        file = increaseFileBy(file0, i);
        rank = increaseRankBy(rank0, j);
        if (isLegal(file, rank)) {
          scopeLine.push(file + rank);
        }
      }
      if (scopeLine.length !== 0) {
        scope.push(scopeLine);
        scopeLine = [];
      }
    }
  }
  return scope;
}

export function getKnightAbstractScope(coordinates) {
  if (!isValidCoordinates(coordinates)) {
    throw new Error("Invalid coordinates");
  }
  const scope = [];
  const [file0, rank0] = coordinates;
  let file, rank;
  let scopeLine = [];
  for (let i of [-2, -1, 1, 2]) {
    for (let j of [-2, -1, 1, 2]) {
      if (Math.abs(i) !== Math.abs(j)) {
        file = increaseFileBy(file0, i);
        rank = increaseRankBy(rank0, j);
        if (isLegal(file, rank)) {
          scopeLine.push(file + rank);
        }
      }
      if (scopeLine.length !== 0) {
        scope.push(scopeLine);
        scopeLine = [];
      }
    }
  }
  return scope;
}

export function getWhitePawnAbstractScope(coordinates) {
  if (!isValidCoordinates(coordinates)) {
    throw new Error("Invalid coordinates");
  }
  const scope = [];
  const [file0, rank0] = coordinates;
  let file, rank;
  let scopeLine = [];
  for (let i of [1, 2]) {
    for (let j of [-1, 0, 1]) {
      if (i === 2 && j !== 0) {
        continue;
      }
      file = increaseFileBy(file0, j);
      rank = increaseRankBy(rank0, i);
      if (isLegal(file, rank)) {
        scopeLine.push(file + rank);
      }
      if (scopeLine.length !== 0) {
        scope.push(scopeLine);
        scopeLine = [];
      }
    }
  }
  return scope;
}

export function getBlackPawnAbstractScope(coordinates) {
  if (!isValidCoordinates(coordinates)) {
    throw new Error("Invalid coordinates");
  }
  const scope = [];
  const [file0, rank0] = coordinates;
  let file, rank;
  let scopeLine = [];
  for (let i of [1, 2]) {
    for (let j of [-1, 0, 1]) {
      if (i === 2 && j !== 0) {
        continue;
      }
      file = increaseFileBy(file0, j);
      rank = increaseRankBy(rank0, -i);
      if (isLegal(file, rank)) {
        scopeLine.push(file + rank);
      }
      if (scopeLine.length !== 0) {
        scope.push(scopeLine);
        scopeLine = [];
      }
    }
  }
  return scope;
}
