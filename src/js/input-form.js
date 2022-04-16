import fechApi from "./fech";

const form = document.querySelector("form");
form.addEventListener("submit", getValueInput);
let page = 1;
let text = "";

document.querySelector(".load-more").addEventListener("click", () => {
  page++;
  onFech();
});

function getValueInput(e) {
  e.preventDefault();
  document.querySelector(".gallery").innerHTML = "";

  const textInput = e.target.searchQuery.value;

  if (textInput === "") {
    page = 1;
    document.querySelector(".load-more ").classList.add("none-btn");
  } else {
    text = textInput;
    onFech();
  }
}

function onFech() {
  fechApi(text, page);
}

// window.addEventListener("scroll", () => {
//   const doc = document.documentElement.getBoundingClientRect();
//   if (doc.bottom < document.documentElement.clientHeight + 200) { })
