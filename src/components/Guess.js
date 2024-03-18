import Compare from "./Compare";
import ColorBox from "./ColorBox";
import SingleGuess from "./SingleGuess";

export default function Guess({ guess, answer }) {
  const red = guess.red;
  const green = guess.green;
  const blue = guess.blue;
  const correctness = Compare(red + green + blue, answer);

  return (
    <>
      <div className="flex flex-row justify-start items-center gap-2">
        <SingleGuess type={"red"} value={red} correctness={correctness.red} />
        <SingleGuess
          type={"green"}
          value={green}
          correctness={correctness.green}
        />
        <SingleGuess
          type={"blue"}
          value={blue}
          correctness={correctness.blue}
        />
        {"--->"}
        <ColorBox bg={"#" + red + green + blue} size={"b"} />
      </div>
    </>
  );
}
