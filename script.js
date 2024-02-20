const hexInput = document.querySelector("#hexInput");
const inputColor = document.querySelector("#inputColor");

hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value;

  if (!isValidHex(hex)) return;

  inputColor.style.backgroundColor = `#${hex}`;
});

const isValidHex = (hex) => {
  if (!hex) return false;

  const trimmedHex = hex.replace("#", "");
  return trimmedHex.length === 3 || trimmedHex.length === 6;
};
