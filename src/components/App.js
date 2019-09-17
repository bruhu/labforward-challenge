import React from "react";
import "./../styles/App.css";
import Chart from "./Chart";
import dataSequences from "../data/data.json";

function App() {
  return (
    <div className="App">
      {dataSequences.map(dataSequence => (
        <Chart sequence={dataSequence} key={dataSequence.title} />
      ))}
      <footer>
        ( Charts are named after the colors they were represented in the original
        sample data file for better differentiation and identification. )
      </footer>
    </div>
  );
}

export default App;
