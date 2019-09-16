import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries } from "react-vis";

class RedChart extends Component {
  render() {
    // prettier-ignore
    const dataImports = [
      {
        title: "data sample 1",
        data: [1,2,1,0,1,2,1,8,9,8,1,2,0,2,1,2,3,1,2,0,8,9,2,0,3,0,2,1,2,3,8,10,2,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1],
        signal:[0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
      }
    ];

    console.log(dataImports[0].data);

    return (
      <div className="redchart-container">
        <h2>Blue Chart</h2>
        <div className="line-chart">
          <p>Data</p>
          <XYPlot height={300} width={700} stroke="red">
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
          <XYPlot height={300} width={700} color="red">
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
