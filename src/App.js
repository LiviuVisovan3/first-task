import "./App.css";
import { Card } from "./components/Card.js";
import wordList from "./word-list.js";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

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
      <input
        placeholder="Cauta..."
        type="text"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      {query}
      {wordList
        .filter((word) => word.slug.includes(query))
        .map((word) => (
          <Card key={word.slug} {...word} />
        ))}
    </div>
  );
}

export default App;
