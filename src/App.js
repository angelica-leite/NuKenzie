import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 },
  ]);

  const [home, setHome] = useState(true);

  return (
    <>
      {home ? (
        <Home setHome={setHome} />
      ) : (
        <div className="App">
          <Header setHome={setHome} />
          <div className="page">
            <div className="divLeft">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div className="divRight">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
