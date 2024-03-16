export default function Compare(guess, answer) {
  const guessRed = parseInt(guess[0], 16);
  const answerRed = parseInt(answer[0], 16);
  const guessGreen = parseInt(guess[2], 16);
  const answerGreen = parseInt(answer[2], 16);
  const guessBlue = parseInt(guess[4], 16);
  const answerBlue = parseInt(answer[4], 16);

  const correctness = {
    red: guessRed < answerRed ? "▲" : guessRed > answerRed ? "▼" : "=",
    green:
      guessGreen < answerGreen ? "▲" : guessGreen > answerGreen ? "▼" : "=",
    blue: guessBlue < answerBlue ? "▲" : guessBlue > answerBlue ? "▼" : "=",
  };

  return correctness;
}
