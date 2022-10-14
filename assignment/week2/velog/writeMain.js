/* 이전 구현 */
// const tagInput = document.querySelector(".new-tag");
// const tagArray = [];
// const TAGLIST = "tagList";

// tagInput.addEventListener("keypress", (e) => {
//   const addTagValue = tagInput.value;

//   if (e.keyCode === 13) {
//     submitTagClick(e);
//   }
// });
// function submitTagClick(e) {
//   e.preventDefault();
//   const addTagValue = tagInput.value;
//   tagInput.value = "";
//   addTagTask(addTagValue);
//   // saveTag(addTagValue);
// }

// function addTagTask(addTagValue) {
//   console.log(tagArray);
//   if (tagArray.includes(addTagValue) === false) {
//     const button = document.createElement("button");
//     button.innerHTML = addTagValue;
//     button.setAttribute("class", "tag-style");
//     document.querySelector("#tag-list").append(button);
//     button.addEventListener("click", deleteTag);
//     tagArray.push(addTagValue);
//     // localStorage.setItem(TAGLIST, tagArray);
//     console.log(tagArray);
//   } else {
//     alert("이미 존재하는 태그입니다");
//   }
// }
// function deleteTag(e) {
//   const deleteTag = e.target;

//   deleteTag.remove();
//   localStorage.removeItem();
// }

/*localStorage 구현*/
const tagInput = document.querySelector(".new-tag");
let tagArray = [];
const TAGLIST = "tagList";

function saveTag(tag) {
  const tagValue = {
    text: tag,
    id: tagArray.length + 1,
  };
  tagArray.push(tagValue);
  localStorage.setItem(TAGLIST, JSON.stringify(tagArray));
}

const getTagList = localStorage.getItem(TAGLIST);
if (getTagList !== null) {
  const parsedTagList = JSON.parse(getTagList);
  for (let tag of parsedTagList) {
    const { text } = tag;
    addTagTask(text);
    saveTag(text);
  }
}

tagInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    submitTagClick(e);
  }
});

function submitTagClick(e) {
  e.preventDefault();
  const addTagValue = tagInput.value;
  tagInput.value = "";

  let testNum = 0;
  for (let i = 0; i < tagArray.length; i++) {
    if (addTagValue === tagArray[i].text) {
      // 중복이 있는지 확인하기 위함
      testNum += 1;
    }
  }
  if (testNum === 0) {
    addTagTask(addTagValue);
    saveTag(addTagValue);
  } else {
    alert("이미 존재하는 태그입니다");
  }
}

function addTagTask(addTagValue) {
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.innerHTML = addTagValue;
  button.setAttribute("class", "tag-style");
  button.addEventListener("click", deleteTag);

  div.appendChild(button);
  div.id = tagArray.length + 1;

  document.querySelector("#tag-list").appendChild(div);
  console.log(tagArray);
}
function deleteTag(e) {
  const { target: button } = e;
  console.log(button);
  const div = button.parentNode;
  console.log(div);
  document.querySelector("#tag-list").removeChild(div);
  tagArray = tagArray.filter((tagValue) => tagValue.id !== Number(div.id));
  //위에서 button에다가 id 부여해두고 계속 div의 id를 읽어오려고 하니, undefined가 났었음!!!
  localStorage.setItem(TAGLIST, JSON.stringify(tagArray));
}
