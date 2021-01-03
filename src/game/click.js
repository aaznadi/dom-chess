let originSquareId = null;

const isEmptySquare = (squareId) =>
  document.getElementById(squareId).innerHTML === "";
// maybe use element.firstChild or element.hasChildNodes()

export default function handleClickOnSquare() {
  // maybe use event target instead
  const targetSquareId = this.getAttribute("id");
  const targetSquare = document.getElementById(targetSquareId);

  /*
    ISSUE #1
    cases:
      - origin is null
        - target is empty -> do nothing
        - target holds a piece -> origin = target
      - origin is not null
        - target is empty -> move
        - target holds a piece -> capture
  */
  if (originSquareId === null) {
    if (!isEmptySquare(targetSquareId)) {
      //origin = target
      originSquareId = targetSquareId;
      targetSquare.classList.toggle("square-clicked");
    }
  } else {
    // move/capture
    const originSquare = document.getElementById(originSquareId);
    const pieceNode = originSquare.firstElementChild;
    targetSquare.innerHTML = "";
    targetSquare.appendChild(pieceNode);
    originSquare.innerHTML = "";
    originSquareId = null;
    originSquare.classList.toggle("square-clicked");
  }
}
