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

dateSelectButton.addEventListener("click", showDateList);
