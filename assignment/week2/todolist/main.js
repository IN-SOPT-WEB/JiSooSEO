// 버튼에 따라 레이아웃 달리하기 구현
const seeToday = document.querySelector("#see-today-button");
const seeTomorrow = document.querySelector("#see-tomorrow-button");
const seeTogether = document.querySelector("#see-together-button");

const leftSection = document.querySelector("#left-section");
const rightSection = document.querySelector("#right-section");

function seeTodayClick() {
  rightSection.style.width = "0";
  rightSection.style.display = "none";
  leftSection.style.width = "60vw";
  leftSection.style.display = "flex";
}
function seeTomorrowClick() {
  leftSection.style.width = "0";
  leftSection.style.display = "none";
  rightSection.style.width = "60vw";
  rightSection.style.display = "flex";
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
const todayInput = document.querySelector("#addTodayTask");
const tomorrowInput = document.querySelector("#addTomorrowTask");

function addTodayTask(addTodayValue) {
  //   const addTodayValue = document.querySelector("#addTodayTask").value;
  let li_num = 0;
  if (document.querySelector(".today-task-li") !== null) {
    li_num += 1;
  }
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const button = document.createElement("button");
  li.setAttribute("id", addTodayValue);
  li.setAttribute("class", "today-task-li");

  const span = document.createElement("span");
  span.innerHTML = addTodayValue;
  span.setAttribute("class", "todo-text");
  //   const textNode = document.createTextNode(addTodayValue);
  if (li_num !== 0) {
    const hr = document.createElement("hr");
    hr.setAttribute("class", "todolist-hr");
    li.append(hr);
    console.log("dsahfdjksafdf");
  }

  li.appendChild(input);
  //   li.appendChild(textNode);
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "trash";
  button.setAttribute("class", "trash-button");
  button.addEventListener("click", deleteTasks);

  document.querySelector("#todayTaskList").appendChild(li);
}
function addTomorrowTask(addTomorrowValue) {
  //   const addTomorrowValue = document.querySelector("#addTomorrowTask").value;
  let li_num = 0;
  if (document.querySelector(".tomorrow-task-li") !== null) {
    li_num += 1;
  }

  if (document.querySelector("li") !== null) {
    const hr = document.createElement("hr");
    hr.setAttribute("class", "todolist-hr");
    console.log("dsahfdjksafdf");
  }

  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const button = document.createElement("button");
  li.setAttribute("id", addTomorrowValue);
  li.setAttribute("class", "tomorrow-task-li");

  const span = document.createElement("span");
  span.innerHTML = addTomorrowValue;
  span.setAttribute("class", "todo-text");
  if (li_num !== 0) {
    const hr = document.createElement("hr");
    hr.setAttribute("class", "todolist-hr");
    li.append(hr);
    console.log("dsahfdjksafdf");
  }

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "trash";
  button.setAttribute("class", "trash-button");
  button.addEventListener("click", deleteTasks);

  document.querySelector("#tomorrowTaskList").appendChild(li);
}
function deleteTasks(e) {
  const deleteTask = e.target.parentElement;
  deleteTask.remove();
}
function submitTodayClick(e) {
  e.preventDefault();
  const addTodayValue = todayInput.value;
  todayInput.value = "";
  addTodayTask(addTodayValue);
}
function submitTomorrowClick(e) {
  e.preventDefault();
  const addTomorrowValue = tomorrowInput.value;
  tomorrowInput.value = "";
  addTomorrowTask(addTomorrowValue);
}
todayInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitTodayClick(e); // 여긴 왜... 괄호에 e를 꼭 넣어주어야하는가?
  }
});
tomorrowInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    submitTomorrowClick(e);
  }
});

seeToday.addEventListener("click", seeTodayClick);
seeTomorrow.addEventListener("click", seeTomorrowClick);
seeTogether.addEventListener("click", seeTogetherClick);

addTodayTaskButton.addEventListener("click", submitTodayClick);
addTomorrowTaskButton.addEventListener("click", submitTomorrowClick);
