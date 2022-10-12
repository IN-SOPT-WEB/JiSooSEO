const dateList = document.querySelector("#select-date-list");
const dateSelectButton = document.querySelector("#select-default-date");

const selecting = document.querySelectorAll(".selecting");
const defaultDate = document.querySelector("#select-default-date-text");

function showDateList() {
  let dateListStatus = dateList.style.display;
  if (dateListStatus === "block") {
    document.querySelector("#select-date-list").style.display = "none";
  } else {
    document.querySelector("#select-date-list").style.display = "block";
  }
  console.log(selecting);
  for (let i = 0; i < selecting.length; i++) {
    selecting[i].addEventListener("click", function () {
      selecting[i].classList.add("date-font-color");
      defaultDate.innerHTML = selecting[i].innerHTML;
      document.querySelector("#select-date-list").style.display = "none";

      for (let j = 0; j < selecting.length; j++) {
        if (j !== i) {
          selecting[j].classList.remove("date-font-color");
        }
      }
    });
  }
}

const tagInput = document.querySelector(".new-tag");
const tagArray = [];

tagInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    submitTagClick(e);
  }
});
function submitTagClick(e) {
  e.preventDefault();
  const addTagValue = tagInput.value;
  tagInput.value = "";
  addTagTask(addTagValue);
}
function addTagTask(addTagValue) {
  const span = document.createElement("span");
  span.innerHTML = addTagValue;
  span.setAttribute("class", "tag-style");
  if (tagArray.includes(addTagValue) === false) {
    document.querySelector("#tag-list").append(span);
    tagArray.push(addTagValue);
    console.log(tagArray);
  }
}

dateSelectButton.addEventListener("click", showDateList);
