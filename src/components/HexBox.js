"use client";
import { useEffect, useState, useContext } from "react";
import HexGen from "./HexGen";
import InverseHex from "./InverseHex";
import { CodeContext } from "./HexGuesser";

export default function HexBox() {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const { setAnswer } = useContext(CodeContext);

  useEffect(() => {
    const newCode = HexGen();
    setColor(newCode);
    setAnswer(newCode);
  }, []);

  useEffect(() => {
    setTextColor(InverseHex(color));
  }, [color]);

  return (
    <div
      style={{
        height: "250px",
        width: "250px",
        border: "2px black solid",
        backgroundColor: "#" + color,
        color: "#" + textColor,
      }}
    >
      {color}
    </div>
  );
}
