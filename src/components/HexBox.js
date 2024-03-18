"use client";
import { useEffect, useState, useContext } from "react";
import HexGen from "./HexGen";
import InverseHex from "./InverseHex";
import { CodeContext } from "./HexGuesser";
import GuessBox from "./GuessBox";

export default function HexBox() {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const { code, setAnswer } = useContext(CodeContext);

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
        backgroundColor: "#" + color,
        color: "#" + textColor,
      }}
      className="flex size-96 rounded-3xl border-2 border-black justify-center items-center"
    >
      <GuessBox code={code} />
    </div>
  );
}
