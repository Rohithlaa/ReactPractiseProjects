import "./styles.css";
import { useState } from "react";
import Table from "./Table.js";
export default function App() {
  const [expense, setExpense] = useState("");
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([
    { expense: "Rohith", data: "Rohith" },
  ]);
  const additionData = () => {
    setExpense("");
    setData("");
    setTotalData([...totalData, { expense, data }]);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <input
        type="text"
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={additionData}>Add</button>
      <Table data={totalData} />
    </div>
  );
}
