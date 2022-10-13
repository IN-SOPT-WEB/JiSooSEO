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
  if (tagArray.includes(addTagValue) === false) {
    const button = document.createElement("button");
    button.innerHTML = addTagValue;
    button.setAttribute("class", "tag-style");

    document.querySelector("#tag-list").append(button);

    button.addEventListener("click", deleteTag);

    tagArray.push(addTagValue);
    console.log(tagArray);
  } else {
    alert("이미 존재하는 태그입니다");
  }
}
function deleteTag(e) {
  const deleteTag = e.target;

  deleteTag.remove();
}
