const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const cardContainer = document.querySelector(".card-container");

let clickNum = 0;
function leftAction() {
  if (clickNum === 0) return;
  clickNum -= 1;

  cardContainer.style.transform = `translate3d(${300 * clickNum}px, 0, 0)`;
  //   cardContainer.style.transform = "translateX(300px)";
}
function rightAction() {
  if (clickNum === 2) return;
  clickNum += 1;

  cardContainer.style.transform = `translate3d(-${300 * clickNum}px, 0, 0)`;
  //   cardContainer.style.transform = "translateX(-300px)";
}
leftButton.addEventListener("click", leftAction);
rightButton.addEventListener("click", rightAction);
