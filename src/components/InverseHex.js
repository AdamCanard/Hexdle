function flip(hexValue) {
  let hexOne = parseInt(hexValue[0], 16);
  let hexTwo = parseInt(hexValue[1], 16);

  hexOne = Math.abs(15 - hexOne);
  hexTwo = Math.abs(15 - hexTwo);

  return hexOne.toString(16).toUpperCase() + hexTwo.toString(16).toUpperCase();
}

export default function InverseHex(code) {
  const red = code[0] + code[1];
  const green = code[0] + code[1];
  const blue = code[0] + code[1];
  return flip(red) + flip(green) + flip(blue);
}
