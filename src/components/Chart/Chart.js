import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // extracting numeric value of each dataPoint/month from the array of dataPoints to return a brand-new array of numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // and among those 12 months we are to find one with the max value
  // to extract elements of the array as standalone arguments we use the spread operator
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
