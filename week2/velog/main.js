const dateList = document.querySelector("#select-date-list");
const dateSelectButton = document.querySelector("#select-default-date");

const selecting = document.querySelectorAll(".selecting");
const defaultDate = document.querySelector("#select-default-date-text");

function showDateList() {
  let dateListStatus = dateList.style.display;
    document.querySelector("#select-date-list").classList.toggle("add-block");
  console.log(selecting);
  for (let i = 0; i < selecting.length; i++) {
    selecting[i].addEventListener("click", function () {
      selecting[i].classList.add("date-font-color");
      defaultDate.innerHTML = selecting[i].innerHTML;
      document.querySelector("#select-date-list").classList.remove("add-block");

      for (let j = 0; j < selecting.length; j++) {
        if (j !== i) {
          selecting[j].classList.remove("date-font-color");
        }
      }
    });
  }
}

const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    console.log("ADfasdfsafdsafds");
    const cardModal = document.createElement("div");
    cardModal.setAttribute("class", "card-modal-style");
    //복사할 카드
    const cardOrigin = cards[i];
    //카드 복사하기 - 깊은 복사
    const cardCopy = cardOrigin.cloneNode(true);
    cardOrigin.after(cardCopy);
    //x버튼 만들기
    const xButton = document.createElement("button");
    xButton.innerHTML = "x";

    cardModal.appendChild(cardOrigin);
    cardModal.appendChild(xButton);

    document.body.appendChild(cardModal);
    document.body.classList.add("card-modal-background");
    document
      .querySelector("#select-default-date")
      .classList.add("card-modal-selecting-color");

    xButton.addEventListener("click", deleteX);
  });
}
function deleteX(e) {
  const deleteX = e.target.parentElement;

  deleteX.remove();
  document.body.classList.remove("card-modal-background");
  document
    .querySelector("#select-default-date")
    .classList.remove("card-modal-selecting-color");
}

dateSelectButton.addEventListener("click", showDateList);
