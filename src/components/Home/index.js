import "./style.css";
import React from "react";
import home from "./../Img/home.png";

function Home({ setHome }) {
  return (
    <div className="index">
      <div className="body">
        <h2>Nu Kenzie</h2>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button
          onClick={() => {
            setHome(false);
          }}
        >
          Iniciar
        </button>
      </div>

      <div className="image">
        <img
          src={home}
          alt="logomarca NuKenzie, são dois pop-up com imagem de cartão."
        />
      </div>
    </div>
  );
}

export default Home;
