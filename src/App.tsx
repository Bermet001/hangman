// import { useState } from "react";
// import words from "./utils/constant/wordList.json";
import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  // const [wordToGess, setWordToGess] = useState(() => {
  //   return words[Math.floor(Math.random() * words.length)];
  // });

  // const [guessedLetters setGuessedLetters]=useState<string[]>([])

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontStyle: "2rem", textAlign: "center" }}>Lose Win</div>

      <div>
        <HangmanDrawing />
        <HangmanWord />

        <div style={{ alignSelf: "stretch" }}>
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default App;
