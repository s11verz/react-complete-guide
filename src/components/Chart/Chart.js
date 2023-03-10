import React from "react";
import ChartBar from "./ChartBar";
import "../../css/Chart.css";

const Chart = (props) => {
  const dataPointValues = props.chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
