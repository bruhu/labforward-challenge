import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries } from "react-vis";

class RedChart extends Component {
  render() {
    // prettier-ignore
    const dataImports = [
      {
        title: "red chart",
    data: [0,2,1,2,3,10,12,1,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1,2,1,3,0,2,3,1,1,2,3,10,9,12,0,2,3,1,2,0,1,7,11,0,1,2],
    signal:[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0]
  }
    ];

    console.log(dataImports[0].data);

    return (
      <div className="redchart-container">
        <h2>Red Chart</h2>
        <div className="line-chart">
          <p>Data</p>
          <XYPlot height={300} width={700} stroke="#A4342B">
            <XAxis />
            <YAxis />
            <LineSeries
              data={dataImports[0].data.map((dataPoint, index) => {
                return { x: index, y: dataPoint };
              })}
            />
          </XYPlot>
        </div>
        <div className="bar-chart">
          <p>Signal</p>
          <XYPlot height={300} width={700} color="#A4342B">
            <XAxis />
            <YAxis />
            <VerticalBarSeries
              data={dataImports[0].signal.map((signalPoint, index) => {
                return { x: index, y: signalPoint };
              })}
            />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default RedChart;
