let body = document.querySelector("body");
let button = document.querySelector("button");
let p = document.querySelector("p");

const colorGenerator = () => {
  const hex = "0123456789ABCDEF";
  let col = "#";
  for (let i = 0; i < 8; i++) {
    let idx = Math.floor(Math.random() * 16);
    col += hex[idx];
  }
  return col;
};
button.addEventListener("click", () => {
  let color = colorGenerator();
  body.style.backgroundColor = color;
  p.innerText = color;
});
