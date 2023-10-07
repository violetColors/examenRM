import React, { useState, useEffect } from "react";
import "./CharacterList.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character-card ${
              character.status === "Dead" ? "dead" : ""
            }`}
          >
            <img
              src={character.image}
              alt={character.name}
              className={`character-image ${
                character.status === "Dead" ? "dead-image" : ""
              }`}
            />
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
