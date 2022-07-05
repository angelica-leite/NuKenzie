import React from "react";
import ButtonTrash from "./../Img/ButtonTrash.png";

function Card({ transaction }) {
  return (
    <div
      className="card"
      style={{
        borderLeft:
          transaction.type === "Entrada"
            ? "2px solid green"
            : " 2px solid grey",
      }}
    >
      <h3>{transaction.description}</h3>
      {transaction.type === "Entrada" ? (
        <>
          <p>R${transaction.value}</p>
          <button>
            <img src={ButtonTrash} alt="" />
          </button>
          <span>Entrada</span>
        </>
      ) : (
        <>
          <p>R${transaction.value}</p>
          <button>
            <img src={ButtonTrash} alt="" />
          </button>
          <span>Despesa</span>
        </>
      )}
    </div>
  );
}

export default Card;
