const LETTERS = "0123456789ABCDEF";
const button = document.querySelector("#button");
const paragraph = document.querySelector("#paragraph-container");

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += LETTERS[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", () => {
  paragraph.style.backgroundColor = getRandomColor();
});
