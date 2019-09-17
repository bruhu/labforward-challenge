import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries } from "react-vis";

class RedChart extends Component {
    render(){
        const{sequence} = this.props;
    }
    return (
      <div className="redchart-container">
        <h2>Red Chart</h2>
        <div className="line-chart">
          <p>Data</p>
          <XYPlot height={300} width={700} stroke="#C0442E">
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
          <XYPlot height={300} width={700} color="#C0442E">
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
