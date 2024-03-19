import { useContext, useState } from "react";
import Button from "./Button";
import { CodeContext } from "./HexGuesser";
import InputBox from "./InputBox";

export default function GuessField() {
  const { setCode, addGuess } = useContext(CodeContext);

  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  const makeGuess = () => {
    if (red != "" && green != "" && blue != "") {
      setCode(red + green + blue);
      addGuess(red, green, blue);
    }
  };

  return (
    <>
      <div
        id="guess field"
        className="flex flex-row w-72 gap-2 justify-center items-center"
      >
        <InputBox label={"R:"} getter={red} setter={setRed} />
        <InputBox label={"G:"} getter={green} setter={setGreen} />
        <InputBox label={"B:"} getter={blue} setter={setBlue} />
        <Button value={"Guess"} onClick={makeGuess} />
      </div>
    </>
  );
}
