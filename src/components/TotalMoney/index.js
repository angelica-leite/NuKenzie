function TotalMoney({ listTransactions }) {
  const totalPrice = listTransactions.reduce((acc, curr) => {
    if (curr.type === "Entrada") {
      return acc + curr.value;
    } else {
      return acc - curr.value;
    }
  }, 0);

  return (
    <div className="totalMoney">
      <h3>
        Valor Total:
        <p>$ {totalPrice}</p>
      </h3>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
