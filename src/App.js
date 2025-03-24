import React from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleVote = (option) => {
    alert(`Você escolheu: ${option}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Qual sua linguagem de programação favorita?</h1>
      <div style={{ marginTop: "20px" }}>
        {/* Botões das opções */}
        <button
          onClick={() => handleVote("JavaScript")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleVote("Python")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Python
        </button>
        <button
          onClick={() => handleVote("Java")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Java
        </button>
      </div>
    </div>
  );
}

export default App;
