import "./App.css";
import { Card } from "./components/Card.js";
import wordList from "./word-list.js";
import { useState } from "react";

function App() {
  const [selectedSlugs, setSelectedSlugs] = useState(["nonlogism", "fiut"]);

  return (
    <div className="App">
      <div className="page-header">
        <img src="nonlogism.jpg" alt="question mark illustration"></img>
        <h1>Dicționar de Nonlogisme</h1>
      </div>
      <h2>Ce sunt nonlogismele?</h2>
      <p>
        Un "<b>nonlogism</b>" este un cuvânt care nu există intr-o limbă dar ar
        trebui sa existe conform realității lingvistice. Un gol/lacună lexicală.
      </p>
      <h2>Lista nonlogismelor actuale</h2>
      {wordList.map((word) => (
        <Card
          key={word.slug}
          {...word}
          isOpen={selectedSlugs.some((slug) => slug === word.slug)}
          onCardClick={() =>
            selectedSlugs.some((x) => x === word.slug)
              ? setSelectedSlugs([
                  ...selectedSlugs.filter((x) => x !== word.slug),
                ])
              : setSelectedSlugs([...selectedSlugs, word.slug])
          }
        />
      ))}
    </div>
  );
}

export default App;
