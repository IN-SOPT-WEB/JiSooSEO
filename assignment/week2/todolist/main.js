// 버튼에 따라 레이아웃 달리하기 구현
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
// 할 일 추가, 삭제
const addTodayTaskButton = document.querySelector("#addTodayTaskButton");
const addTomorrowTaskButton = document.querySelector("#addTomorrowTaskButton");
const tomorrowTask = document.querySelector("#addTomorrowTask").value;

function addTodayTask() {
  const addTodayValue = document.querySelector("#addTodayTask").value;

  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const button = document.createElement("button");
  li.setAttribute("id", addTodayValue);

  const span = document.createElement("span");
  span.innerHTML = addTodayValue;
  span.setAttribute("class", "todo-text");
  //   const textNode = document.createTextNode(addTodayValue);
  li.appendChild(input);
  //   li.appendChild(textNode);
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "trash";
  button.setAttribute("class", "trash-button");
  //   button.addEventListener("click", deleteTasks);

  document.querySelector("#todayTaskList").appendChild(li);
}
function addTomorrowTask() {
  const addTomorrowValue = document.querySelector("#addTomorrowTask").value;

  const li = document.createElement("li");
  li.setAttribute("id", addTomorrowValue);

  const textNode = document.createTextNode(addTomorrowValue);
  li.appendChild(textNode);

  document.querySelector("#tomorrowTaskList").appendChild(li);
}

seeToday.addEventListener("click", seeTodayClick);
seeTomorrow.addEventListener("click", seeTomorrowClick);
seeTogether.addEventListener("click", seeTogetherClick);

addTodayTaskButton.addEventListener("click", addTodayTask);
addTomorrowTaskButton.addEventListener("click", addTomorrowTask);
