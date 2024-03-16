import ColorBox from "./ColorBox";
import Compare from "./Compare";

export default function Guess({ guess, answer }) {
  const red = guess.red;
  const green = guess.green;
  const blue = guess.blue;
  const correctness = Compare(red + green + blue, answer);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
          }}
        >
          <ColorBox bg={"#" + red + "0000"} />
          {red}
          {correctness.red}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
          }}
        >
          <ColorBox bg={"#00" + green + "00"} />
          {green}
          {correctness.green}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
          }}
        >
          <ColorBox bg={"#0000" + blue} />
          {blue}
          {correctness.blue}
        </div>
        <ColorBox bg={"#" + red + green + blue} />
      </div>
    </>
  );
}
