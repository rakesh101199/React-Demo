import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const amountValuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxAmount = Math.max(...amountValuesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
