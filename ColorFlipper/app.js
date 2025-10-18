colors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "white"]
function changeColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.getElementById("colorDisplay").textContent = colors[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
}