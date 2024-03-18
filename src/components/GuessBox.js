"use client";
import { useState, useEffect } from "react";
import InverseHex from "./InverseHex";

export default function GuessBox({ code }) {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    if (code === "") {
      setColor("000000");
    } else {
      setColor(code);
    }
  }, [code]);

  useEffect(() => {
    setTextColor(InverseHex(color));
  }, [color]);

  return (
    <div
      style={{
        backgroundColor: "#" + color,
        color: "#" + textColor,
      }}
      className="flex size-48 rounded-full border-2 border-black text-center items-center justify-center"
    >
      {color}
    </div>
  );
}
