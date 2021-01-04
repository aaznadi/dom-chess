import {
  getRookAbstractScope,
  getBishopAbstractScope,
  getQueenAbstractScope,
  getKnightAbstractScope,
  getKingAbstractScope,
  getWhitePawnAbstractScope,
  getBlackPawnAbstractScope,
} from "../src/game/abstract_scope.js";

test("Test Bishop on 'e4'", () => {
  const scope = [
    "b1",
    "c2",
    "d3",
    "f5",
    "g6",
    "h7",
    "h1",
    "g2",
    "f3",
    "d5",
    "c6",
    "b7",
    "a8",
  ];
  expect(getBishopAbstractScope("e4").sort()).toEqual(scope.sort());
});
