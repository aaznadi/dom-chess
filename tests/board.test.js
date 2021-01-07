import { Board } from "../src/game/board";

const board = new Board();

test("Test default 'e4'", () => {
  const piece = board.getPieceAt("e4");
  expect(piece).toBe(null);
});

test("Test setPieceAt", () => {
  board.setPieceAt("black bishop", "e4");
  const piece = board.getPieceAt("e4");
  expect(piece).toBe("black bishop");
});
