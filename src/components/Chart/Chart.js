import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // this is to take the all the values inside chartDataPoints[{value: }, {...}] and put it in a new array
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log("dataPointValues", dataPointValues);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
