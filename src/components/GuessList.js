import { useContext } from "react";
import { CodeContext } from "./HexGuesser";
import Guess from "./Guess";

export default function GuessList() {
  const { guesses, answer } = useContext(CodeContext);

  return (
    <div className="flex flex-col-reverse justify-center items-center gap-2 w-72 pl-1">
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} answer={answer} />
      ))}
    </div>
  );
}
