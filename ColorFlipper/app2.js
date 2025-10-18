let colors = [
  "#FFB3BA", // Soft Red
  "#BAFFC9", // Soft Green
  "#BAE1FF", // Soft Blue
  "#FFFACD", // Soft Yellow
  "#E6D4FF", // Soft Purple
  "#FFD9B3", // Soft Orange
  "#FFB3D9", // Soft Pink
  "#FFCBA4", // Soft Peach
  "#B3FFD9", // Soft Mint
  "#E6D4FF", // Soft Lavender
  "#FFB3A7", // Soft Coral
  "#D4F1D4", // Soft Sage
  "#FFFACD", // Soft Cream
  "#FFC9E6", // Soft Blush
  "#B3E5FC", // Soft Teal
  "#FFD4E5", // Soft Rose
  "#DCC9E8", // Soft Mauve
  "#F0E68C", // Soft Khaki
  "#E6D7F0", // Soft Lilac
  "#F5DEB3"  // Soft Tan
];
function changeColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.getElementById("colorDisplay").textContent = colors[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
}