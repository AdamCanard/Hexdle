import { useContext, useState } from "react";
import { CodeContext } from "../src/app/page";
import Guess from "./Guess";

export default function GuessList() {
  const { guesses, answer } = useContext(CodeContext);

  return (
    <>
      {guesses.map((guess) => (
        <Guess guess={guess} answer={answer} />
      ))}
    </>
  );
}
