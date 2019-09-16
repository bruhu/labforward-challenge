import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis } from "react-vis";

class BlueChart extends Component {
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
      <div className="bluechart-container">
        <h2>Blue Chart</h2>
        <div className="line-chart">
          <p>Data</p>
          <XYPlot height={300} width={600}>
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
          <XYPlot height={300} width={600} color="blue">
            <XAxis />
            <YAxis />
            <LineSeries
              data={dataImports[0].data.map((dataPoint, index) => {
                return { x: index, y: dataPoint };
              })}
            />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default BlueChart;
