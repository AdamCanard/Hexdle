"use client";
import HexBox from "/components/HexBox.js";
import GuessBox from "/components/GuessBox";
import { createContext, useState } from "react";
import GuessField from "/components/GuessField";
import GuessList from "../../components/GuessList";

export const CodeContext = createContext(null);

export default function Home() {
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
      <div
        className="flex w-full h-full justify-center gap-14 pt-12 border-2 border-black"
        suppressHydrationWarning={true}
      >
        <HexBox />
        <GuessBox code={code} />
      </div>
      <GuessField />
      <GuessList />
    </CodeContext.Provider>
  );
}
