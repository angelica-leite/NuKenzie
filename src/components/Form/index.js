import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Entrada");

  function handleTransactions() {
    const transaction = {
      description,
      type,
      value,
    };

    setListTransactions([...listTransactions, transaction]);
  }

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>Descrição</label>
        <input
          id="descricao"
          type={"text"}
          placeholder="Digite sua descrição"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <span>Ex: Compra de Roupas</span>

        <label> Valor</label>
        <input
          id="valor"
          type={"number"}
          placeholder="1 R$"
          onChange={(event) => {
            setValue(parseInt(event.target.value));
          }}
        />

        <label>Tipo de Valor</label>
        <select
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option>Entrada</option>
          <option>Saída</option>
        </select>

        <button onClick={handleTransactions}>Inserir valor</button>
      </form>
    </div>
  );
}

export default Form;
