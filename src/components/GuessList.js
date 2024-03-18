import { useContext } from "react";
import { CodeContext } from "./HexGuesser";
import Guess from "./Guess";

export default function GuessList() {
  const { guesses, answer } = useContext(CodeContext);

  return (
    <div className="flex flex-col-reverse gap-2 w-72">
      {guesses.map((guess) => (
        <Guess guess={guess} answer={answer} />
      ))}
    </div>
  );
}
