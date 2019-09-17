import React from "react";
import "./styles/App.css";
import BlueChart from "./components/BlueChart";
import RedChart from "./components/RedChart";
import YellowChart from "./components/YellowChart";

function App() {
  return (
    <div className="App">
      {/* your code will go here */}
      <BlueChart />
      <RedChart />
      <YellowChart />
    </div>
  );
}

export default App;
