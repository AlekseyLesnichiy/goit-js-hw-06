function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  "btnChangeColor": document.querySelector(".change-color"),
  "span": document.querySelector(".color"),
  "body": document.querySelector("body")
}

refs.btnChangeColor.addEventListener("click", () => {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.span.textContent = `${getRandomHexColor()}`;

})

