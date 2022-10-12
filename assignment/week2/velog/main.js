const dateList = document.querySelector("#select-date-list");
const dateSelectButton = document.querySelector("#select-default-date");

// const day = document.querySelector("#select-day");
// const week = document.querySelector("#select-week");
// const month = document.querySelector("#select-month");
// const year = document.querySelector("#select-year");
const selecting = document.querySelectorAll(".selecting");

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
      for (let j = 0; j < selecting.length; j++) {
        if (j !== i) {
          selecting[j].classList.remove("date-font-color");
        }
      }
    });
  }

  //   day.classList.add("date-font-color");
  //   console.log()
}

dateSelectButton.addEventListener("click", showDateList);
