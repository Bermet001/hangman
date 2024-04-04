// import { useState } from "react";
// import words from "./utils/constant/wordList.json";
import "./App.css";

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
    </div>
  );
}

export default App;
