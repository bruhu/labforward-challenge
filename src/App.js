import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import BlueChart from "./components/BlueChart";
import RedChart from "./components/RedChart";
import YellowChart from "./components/YellowChart";
import dataSequences from "./data/data.json";

function App() {
  return (
    <div className="App">
      {dataSequences.map(dataSequence => (
        <Chart sequence={dataSequence} key={dataSequence.title} />
      ))}
      {/* <BlueChart />
      <RedChart />
      <YellowChart /> */}
    </div>
  );
}

export default App;
