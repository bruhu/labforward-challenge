import React from "react";
import "./styles/App.css";
import Chart from "./components/Chart";
import dataSequences from "./data/data.json";

function App() {
  return (
    <div className="App">
      {dataSequences.map(dataSequence => (
        <Chart sequence={dataSequence} key={dataSequence.title} />
      ))}
    </div>
  );
}

export default App;
