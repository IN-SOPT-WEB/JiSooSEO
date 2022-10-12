// const selectDateButton = document.querySelector("#select-date-button");

// const selectDay = document.querySelector("#select-day");
// const selectWeek = document.querySelector("#select-week");
// const selectMonth = document.querySelector("#select-month");
// const selectYear = document.querySelector("#select-year");

// const defaultDate = document.querySelector("#select-default-date");
// const dateList = document.querySelector("#select-date-list");

// function selectingDate() {
//   let p_num = 0;
//   if (document.querySelector(".data-list-showing") !== null) {
//     p_num += 1;
//   }
//   if (p_num === 0) {
//     console.log("adsfsaf a");
//     const day = document.createElement("p");
//     const week = document.createElement("p");
//     const month = document.createElement("p");
//     const year = document.createElement("p");
//     day.innerHTML = "오늘";
//     week.innerHTML = "이번 주";
//     month.innerHTML = "이번 달";
//     year.innerHTML = "올해";
//     // dateList.style.display = "block";

//     day.setAttribute("class", "data-list-showing");
//     week.setAttribute("class", "data-list-showing");
//     month.setAttribute("class", "data-list-showing");
//     year.setAttribute("class", "data-list-showing");

//     dateList.appendChild(day);
//     dateList.appendChild(week);
//     dateList.appendChild(month);
//     dateList.appendChild(year);
//     console.log("p_num" + p_num);
//   } else {
//     console.log("Adsfasfdsafdsafds");
//     dateList.style.display = "none";
//     p_num = 0;
//     dateList.removeChild(day);
//     dateList.removeChild(week);
//     dateList.removeChild(month);
//     dateList.removeChild(year);
//   }
// }
// // function selectDateButton(){
// //     if
// // }
// selectDateButton.addEventListener("click", selectingDate);

// // const selectDateButton = document.querySelector("#select-date-button");
// // function selectDate() {
// //   console.log("adfaefdafewqfq");
// // }
// // selectDateButton.addEventListener("click", selectDate);

const dateList = document.querySelector("#select-date-list");
const dateSelectButton = document.querySelector("#select-default-date");

function showDateList() {
  let dateListStatus = dateList.style.display;
  if (dateListStatus === "block") {
    document.querySelector("#select-date-list").style.display = "none";
  } else {
    document.querySelector("#select-date-list").style.display = "block";
  }
}
dateSelectButton.addEventListener("click", showDateList);
