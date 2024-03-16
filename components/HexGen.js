"use client";
export default function HexGen() {
  const max = 16;
  let hexCode = "";
  while (hexCode.length < 6) {
    let newcode = Math.floor(Math.random() * max);
    hexCode += newcode.toString(16);
    hexCode += newcode.toString(16);
  }
  return hexCode;
}
