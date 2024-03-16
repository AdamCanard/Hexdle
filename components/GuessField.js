import { useContext, useState } from "react";
import Button from "./Button";
import { CodeContext } from "../src/app/page";

export default function GuessField() {
  const { setCode, addGuess } = useContext(CodeContext);

  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  const makeGuess = () => {
    setCode(red + green + blue);
    addGuess(red, green, blue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <label>Red: </label>
        <input
          maxLength={"2"}
          value={red}
          className="border-solid border-black border-2 w-10"
          onChange={(e) => setRed(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Green: </label>
        <input
          maxLength={"2"}
          value={green}
          className="border-solid border-black border-2 w-10"
          onChange={(e) => setGreen(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Blue: </label>
        <input
          maxLength={"2"}
          value={blue}
          className="border-solid border-black border-2 w-10"
          onChange={(e) => setBlue(e.target.value)}
          type="text"
        />
      </div>
      <Button value={"Guess"} onClick={makeGuess} />
    </div>
  );
}
