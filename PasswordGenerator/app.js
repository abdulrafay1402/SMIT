const passwordDisplay = document.getElementById("passwordDisplay");
const lengthSlider = document.getElementById("lengthSlider");
const lengthDisplay = document.getElementById("lengthDisplay");
const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const digitsCheckbox = document.getElementById("digits");
const symbolsCheckbox = document.getElementById("symbols");
const copyBtn = document.getElementById("copyBtn");
const copyFeedback = document.getElementById("copyFeedback");

const charSets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function buildPassword(index = 0, password = "", availableChars = "") {
  if (index === parseInt(lengthSlider.value)) {
    return password;
  }

  const randomChar =
    availableChars[Math.floor(Math.random() * availableChars.length)];
  return buildPassword(index + 1, password + randomChar, availableChars);
}

function getAvailableCharacters() {
  let chars = "";
  if (lowercaseCheckbox.checked) chars += charSets.lowercase;
  if (uppercaseCheckbox.checked) chars += charSets.uppercase;
  if (digitsCheckbox.checked) chars += charSets.digits;
  if (symbolsCheckbox.checked) chars += charSets.symbols;
  return chars;
}

function generatePassword() {
  const availableChars = getAvailableCharacters();

  if (availableChars.length === 0) {
    passwordDisplay.textContent = "Select at least one option";
    return;
  }

  const password = buildPassword(0, "", availableChars);
  passwordDisplay.textContent = password;
}
lengthSlider.addEventListener("input", (e) => {
  lengthDisplay.textContent = e.target.value;
  generatePassword();
});

lowercaseCheckbox.addEventListener("change", generatePassword);
uppercaseCheckbox.addEventListener("change", generatePassword);
digitsCheckbox.addEventListener("change", generatePassword);
symbolsCheckbox.addEventListener("change", generatePassword);

copyBtn.addEventListener("click", () => {
  const password = passwordDisplay.textContent;
  if (
    password &&
    password !== "Select at least one option" &&
    password !== "Generate Password..."
  ) {
    navigator.clipboard.writeText(password).then(() => {
      copyFeedback.classList.add("show");
      setTimeout(() => {
        copyFeedback.classList.remove("show");
      }, 2000);
    });
  }
});

generatePassword();
