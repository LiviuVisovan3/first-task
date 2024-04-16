import { useState } from "react";

function translatePartOfSpeech(partOfSpeech) {
  return { noun: "substantiv", adverb: "adverb", adjective: "adjectiv" }[
    partOfSpeech
  ];
}

export function Card({
  partOfSpeech,
  slug,
  word,
  definition,
  examples,
  etymology,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`card ${partOfSpeech}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="word-header">
        <img src={`images/${slug}.jpeg`}></img>
        <div className="part-of-speech">
          {translatePartOfSpeech(partOfSpeech)}
        </div>
        <div className="gradient"></div>
      </div>
      <div className="card-body">
        <h2>{word}</h2>
        {isOpen && (
          <>
            <p>{definition}</p>
            {examples?.length && <h4>Examples</h4>}
            <ul>
              {examples?.map((example) => (
                <li key={example}>
                  <i>{example}</i>
                </li>
              ))}
            </ul>
            <h4>
              Etimologie: <span>{etymology}</span>
            </h4>
          </>
        )}
      </div>
    </div>
  );
}
