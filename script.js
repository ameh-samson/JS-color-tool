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

const convertHexToRGB = (hex) => {
  if (!isValidHex(hex)) return null;

  let trimmedHex = hex.replace("#", "");

  if (trimmedHex.length === 3) {
    trimmedHex =
      trimmedHex[0] +
      trimmedHex[0] +
      trimmedHex[1] +
      trimmedHex[1] +
      trimmedHex[2] +
      trimmedHex[2];
  }

  const r = parseInt(trimmedHex.substring(0, 2), 16);
  const g = parseInt(trimmedHex.substring(2, 4), 16);
  const b = parseInt(trimmedHex.substring(4, 6), 16);

  return { r, g, b };
};

console.log(convertHexToRGB("123"));
