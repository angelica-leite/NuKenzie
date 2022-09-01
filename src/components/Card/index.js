import React from "react";
import ButtonTrash from "./../Img/ButtonTrash.png";

function Card({ transaction, index, listTransactions, setListTransactions }) {
  const filtered = (item) => {
    const filter = listTransactions.filter((transaction) => {
      return transaction.description !== item;
    });
    setListTransactions(filter);
  };

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
      <p>R${transaction.value}</p>
      <button onClick={() => filtered(transaction.description)}>
        <img src={ButtonTrash} alt="Botão excluir" />
      </button>
      {transaction.type === "Entrada" ? (
        <span>Entrada</span>
      ) : (
        <span>Despesas</span>
      )}
    </div>
  );
}

export default Card;
