const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const cardContainer = document.querySelector(".card-container");

let clickNum = 0;

function leftAction() {
  if (clickNum === 0) return;
  clickNum -= 1;

  cardContainer.style.transform = `translate3d(-${175 * clickNum}px, 0, 0)`;
}
function rightAction() {
  if (clickNum === 9) return;
  clickNum += 1;

  cardContainer.style.transform = `translate3d(-${175 * clickNum}px, 0, 0)`;
}

leftButton.addEventListener("click", leftAction);
rightButton.addEventListener("click", rightAction);
