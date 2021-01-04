let originSquareId = null;

const isNotEmpty = (square) => square.hasChildNodes();

export default function handleClickOnSquare() {
  // maybe use event target instead
  const targetSquareId = this.getAttribute("id");
  const targetSquare = document.getElementById(targetSquareId);

  if (originSquareId === null) {
    // first click
    if (isNotEmpty(targetSquare)) {
      originSquareId = targetSquareId;
      targetSquare.classList.toggle("square-clicked");
    }
  } else {
    // second click
    if (originSquareId === targetSquareId) {
      // second click on same square
      targetSquare.classList.toggle("square-clicked");
      originSquareId = null;
    } else {
      // second click on different square
      const originSquare = document.getElementById(originSquareId);
      const piece = originSquare.firstElementChild;
      targetSquare.innerHTML = "";
      targetSquare.appendChild(piece);
      originSquare.innerHTML = "";
      originSquareId = null;
      originSquare.classList.toggle("square-clicked");
    }
  }
}
