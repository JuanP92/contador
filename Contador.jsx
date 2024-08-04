import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <h1>Pruebas de kloyd</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Conteo actual {count}
        </button>
        <button
          onClick={() => {
            setClicked((clicked) => !clicked);
          }}
        >
          Haz click aquí
        </button>
      </div>
      <span
        style={{
          fontSize: "3rem",
          color: clicked ? "lightgreen" : "lightpink",
        }}
      >
        {clicked ? "Clieckeado" : "No clickeado"}
      </span>
      <p className="read-the-docs">Aprendiendo con kloyd</p>
    </>
  );
};

export default Contador;
