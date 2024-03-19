"use client";
import HexBox from "../components/HexBox.js";
import { createContext, useState } from "react";
import GuessField from "../components/GuessField";
import GuessList from "../components/GuessList";

export const CodeContext = createContext(null);

export default function HexGuesser() {
  const [code, setCode] = useState("000000");
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState("");

  const addGuess = (red, green, blue) => {
    const guess = {
      red: red,
      green: green,
      blue: blue,
    };
    setGuesses([...guesses, guess]);
  };

  const value = { code, guesses, answer, setCode, addGuess, setAnswer };

  return (
    <CodeContext.Provider value={value}>
      <div className="bg-[#f3dfc1] text-[#1a1c1a] w-full h-screen overflow-auto">
        <div className="flex justify-center items-center">
          <h1 className="w-[35rem] h-12 font-bold text-center  text-5xl border-b-2 border-black">
            Hexdle
          </h1>
        </div>
        <div
          className="flex w-full justify-center gap-14 pt-8 "
          suppressHydrationWarning={true}
        >
          <HexBox />
        </div>
        <div className="flex flex-col w-72 py-2 mt-2 m-auto justify-center items-center border-2 rounded-lg border-slate-950">
          <GuessField />
          <GuessList />
        </div>
      </div>
    </CodeContext.Provider>
  );
}
