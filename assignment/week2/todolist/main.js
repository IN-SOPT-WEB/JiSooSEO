const seeToday = document.querySelector("#see-today-button");
const seeTomorrow = document.querySelector("#see-tomorrow-button");
const seeTogether = document.querySelector("#see-together-button");

const leftSection = document.querySelector("#left-section");
const rightSection = document.querySelector("#right-section");

function seeTodayClick() {
  leftSection.style.width = "0";
  leftSection.style.display = "none";
  rightSection.style.width = "60vw";
  rightSection.style.display = "flex";
}
function seeTomorrowClick() {
  rightSection.style.width = "0";
  rightSection.style.display = "none";
  leftSection.style.width = "60vw";
  leftSection.style.display = "flex";
}
function seeTogetherClick() {
  rightSection.style.width = "30vw";
  rightSection.style.display = "flex";
  leftSection.style.width = "30vw";
  leftSection.style.display = "flex";
}

seeToday.addEventListener("click", seeTodayClick);
seeTomorrow.addEventListener("click", seeTomorrowClick);
seeTogether.addEventListener("click", seeTogetherClick);
