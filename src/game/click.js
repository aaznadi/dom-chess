let originSquareId = null;

const isEmptySquare = (squareId) =>
  document.getElementById(squareId).innerHTML === "";
// maybe use element.firstChild or element.hasChildNodes()

export default function handleClickOnSquare() {
  // maybe use event target instead
  const targetSquareId = this.getAttribute("id");
  const targetSquare = document.getElementById(targetSquareId);
  targetSquare.classList.toggle("square-clicked");

  if (originSquareId === null) {
    // first click
    originSquareId = targetSquareId;
  } else if (originSquareId === targetSquareId) {
    // two clicks on the same square
    originSquareId = null;
  } else if (isEmptySquare(originSquareId)) {
    // origin is an empty square
    originSquareId = null;
    targetSquare.classList.toggle("square-clicked");
  } else {
    // origin and target neither empty nor the same
    const originSquare = document.getElementById(originSquareId);
    targetSquare.classList.toggle("square-clicked");
    originSquare.classList.toggle("square-clicked");
    const pieceNode = originSquare.firstElementChild;
    targetSquare.innerHTML = "";
    targetSquare.appendChild(pieceNode);
    originSquare.innerHTML = "";
    originSquareId = null;
  }
}
