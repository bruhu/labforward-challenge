import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries } from "react-vis";

class RedChart extends Component {
    render(){
        const{sequence} = this.props;
    
    return (
        <div className="redchart-container"/>
          <h2>{sequence.title}</h2>
          <div className="line-chart">
            <p>Data</p>
            <XYPlot height={300} width={700} stroke={sequence.style.strokeColor}>
              <XAxis />
              <YAxis />
              <LineSeries
                data={sequence.data.map((dataPoint, index) => {
                  return { x: index, y: dataPoint };
                })}
              />
            </XYPlot>
          </div>
          <div className="bar-chart">
            <p>Signal</p>
            <XYPlot height={300} width={700} color ={sequence.style.strokeColor}>
              <XAxis />
              <YAxis />
              <VerticalBarSeries
                data={sequence.signal.map((signalPoint, index) => {
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
