import {
  getRookAbstractScope,
  getBishopAbstractScope,
  getQueenAbstractScope,
  getKnightAbstractScope,
  getKingAbstractScope,
  getWhitePawnAbstractScope,
  getBlackPawnAbstractScope,
} from "../src/game/abstract_scope.js";

test("Test Rook on 'e4'", () => {
  const scope = [
    ["e5", "e6", "e7", "e8"],
    ["e3", "e2", "e1"],
    ["f4", "g4", "h4"],
    ["d4", "c4", "b4", "a4"],
  ];
  expect(getRookAbstractScope("e4").sort()).toEqual(scope.sort());
});

test("Test Rook on 'a1'", () => {
  const scope = [
    ["a2", "a3", "a4", "a5", "a6", "a7", "a8"],
    ["b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];
  expect(getRookAbstractScope("a1").sort()).toEqual(scope.sort());
});

test("Test Rook on 'h8'", () => {
  const scope = [
    ["g8", "f8", "e8", "d8", "c8", "b8", "a8"],
    ["h7", "h6", "h5", "h4", "h3", "h2", "h1"],
  ];
  expect(getRookAbstractScope("h8").sort()).toEqual(scope.sort());
});
