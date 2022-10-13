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

const cards = document.querySelectorAll(".card");
let idNum = 0;
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    console.log("ADfasdfsafdsafds");
    const cardModal = document.createElement("div");
    //복사할 카드
    const cardOrigin = cards[i];
    //카드 복사하기 - 깊은 복사
    const cardCopy = cardOrigin.cloneNode(true);
    idNum++;
    cardCopy.id = "copyCard" + idNum;
    cardOrigin.after(cardCopy);
    //x버튼 만들기
    const xButton = document.createElement("button");
    xButton.innerHTML = "x";

    cardModal.appendChild(cardOrigin);
    cardModal.appendChild(xButton);

    document.querySelector("body").appendChild(cardModal);

    xButton.addEventListener("click", deleteX);
  });
}
function deleteX(e) {
  const deleteX = e.target.parentElement;

  deleteX.remove();
}

dateSelectButton.addEventListener("click", showDateList);
