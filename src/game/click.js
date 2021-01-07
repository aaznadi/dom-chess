let originSquareId = null;

export default function handleClickOnSquare(event, board) {
  console.log(event.target);
  const targetSquare = event.target;
  const targetCoordinates = targetSquare.getAttribute("id");
  const targetPiece = board.getPieceAt(targetCoordinates);
  if (originSquareId === null) {
    // first click
    if (targetPiece === null) {
      originSquareId = targetCoordinates;
      targetSquare.classList.toggle("square-clicked");
    }
  } else {
    // second click
    if (originSquareId === targetCoordinates) {
      // second click on same square
      targetSquare.classList.toggle("square-clicked");
      originSquareId = null;
    } else {
      // second click on different square
      const originPiece = board.getPieceAt(originSquareId);

      originPiece.remove();
      targetPiece.moveTo(targetCoordinates);

      // un-highlight origin square and set it back to null
      const originSquare = document.getElementById(originSquareId);
      originSquare.classList.toggle("square-clicked");
      originSquareId = null;

      //TO DO
      // remove the piece in target square (capture)
    }
  }
}
