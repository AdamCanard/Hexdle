import ColorBox from "./ColorBox";

export default function SingleGuess({ type, value, correctness }) {
  return (
    <div className="flex flex-col w-12 pt-2 justify-center items-center border-2 border-black">
      {type == "red" ? (
        <ColorBox bg={"#" + value + "0000"} size={"s"} />
      ) : type == "green" ? (
        <ColorBox bg={"#00" + value + "00"} size={"s"} />
      ) : (
        <ColorBox bg={"#0000" + value} size={"s"} />
      )}
      {value}
      {correctness}
    </div>
  );
}
