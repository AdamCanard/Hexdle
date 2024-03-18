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
