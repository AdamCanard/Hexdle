"use client";
import HexBox from "../components/HexBox.js";
import { createContext, useEffect, useState } from "react";
import GuessField from "./GuessField";
import GuessList from "./GuessList";
import Overlay from "./Overlay";
import Button from "./Button.js";

export const CodeContext = createContext(null);

export default function HexGuesser() {
  const [code, setCode] = useState("000000");
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState("");
  const [winFlag, setWinFlag] = useState(true);

  const addGuess = (red, green, blue) => {
    const guess = {
      red: red,
      green: green,
      blue: blue,
    };
    setGuesses([...guesses, guess]);
  };

  useEffect(() => {
    if (guesses.length > 0) {
      var lastGuess = guesses[guesses.length - 1];
      const checkGuess =
        lastGuess.red[0] + lastGuess.green[0] + lastGuess.blue[0];
      const checkAnswer = answer[0] + answer[2] + answer[4];
      console.log(checkGuess, checkAnswer);
      if (checkGuess.toUpperCase() === checkAnswer.toUpperCase()) {
      }
    }
  }, [guesses]);

  const value = {
    code,
    guesses,
    answer,
    setCode,
    addGuess,
    setAnswer,
    setWinFlag,
  };

  return (
    <CodeContext.Provider value={value}>
      <Overlay isOn={winFlag} onClose={() => setWinFlag(!winFlag)}>
        <div className="bg-[#f3dfc1] text-[#1a1c1a] w-full h-screen mix-blend-multiply overflow-auto">
          <div className="flex justify-center items-center">
            <h1 className="w-[35rem] h-12 font-bold text-center  text-5xl border-b-2 border-black">
              Hexdle
            </h1>
            <Button label={"WIN"} onClick={() => setWinFlag(!winFlag)}></Button>
          </div>
          <div className="flex w-full justify-center gap-14 pt-8 ">
            <HexBox />
          </div>
          <div className="flex flex-col w-72 py-2 mt-2 m-auto justify-center items-center border-2 rounded-lg border-slate-950">
            <GuessField />
            <GuessList />
          </div>
        </div>
      </Overlay>
    </CodeContext.Provider>
  );
}
