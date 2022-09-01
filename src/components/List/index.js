import { useState } from "react";
import Card from "../Card";

function List({ listTransactions, setListTransactions }) {
  const [filter, setFilter] = useState("Todos");

  const filtered = listTransactions.filter((item) => {
    return item.type === filter;
  });

  return (
    <>
      <div className="filters">
        <h3>Resumo Financeiro</h3>
        <button
          id="btnTodos"
          onClick={() => {
            setFilter("Todos");
          }}
        >
          Todos
        </button>
        <button
          id="btnEntrada"
          onClick={() => {
            setFilter("Entrada");
          }}
        >
          Entrada
        </button>
        <button
          id="btnDespesas"
          onClick={() => {
            setFilter("Saída");
          }}
        >
          Despesas
        </button>
      </div>
      <div className="cards">
        {filter === "Todos"
          ? listTransactions.map((transaction, index) => (
              <Card
                transaction={transaction}
                index={index}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                key={index}
              />
            ))
          : filtered.map((transaction, index) => (
              <Card
                transaction={transaction}
                index={index}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                key={index}
              />
            ))}
      </div>
    </>
  );
}

export default List;
