// buttons
const positionBtn = document.querySelector(".position_btn");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
const bgBtn = document.querySelector(".bg_btn");

// greeting
const img = document.querySelector(".greeting_img");
const greeting_text = document.querySelector(".greeting_text");

const pos_container = document.querySelector(".position_container");
const edit_container = document.querySelector(".edit_container");
let isPosition = false;
let isEdit = false;
// handlers

const setPosition = () => {
  if (isPosition) {
    pos_container.classList.remove("show");
    isPosition = false;
  } else {
    pos_container.classList.add("show");
    isPosition = true;
  }
};

const setEdit = () => {
  if (isEdit) {
    edit_container.classList.remove("show");
    isEdit = false;
  } else {
    edit_container.classList.add("show");
    isEdit = true;
  }
};
const positionHandler = (method) => {
  console.log(method);
  if (method == "left") {
    img.className = "left_img";
  } else if (method == "right") {
    img.className = "right_img";
  } else if ("bg") {
    img.classList = "bg_img";
  }
};

const handleEdit = () => {
  const newText = document.getElementById("edit_text").value;
  greeting_text.textContent = newText;
  console.log(newText);
};

const handleEditText = () => {
  const newColor = document.getElementById("edit_color").value;
  const fontSize = document.getElementById("edit_font").value;
  greeting_text.style.color = newColor;
  greeting_text.style.fontSize = fontSize;

  
};
