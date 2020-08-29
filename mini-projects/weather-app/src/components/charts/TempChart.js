/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from "react";
import {connect} from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value + "°C"}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const TempChart  = ( props ) => {
    console.log("Prop" , props);
    const {weather} = props;
    return (
      <div>
        {weather && (
          <LineChart
            width={700}
            height={500}
            data={weather}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" height={60} tick={<CustomizedAxisTick />} />
            <YAxis type="number" domain={[0, 50]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              label={<CustomizedLabel />}
            />
            {/* <Line type="monotone" dataKey="feelsLike" stroke="#82ca9d" /> */}
          </LineChart>
        )}
      </div>
    );  

      
}
const mapStateToProps = ( state ) => {
  return {
    weather: state.weather.hourly,
  };
}
export default connect(mapStateToProps)(TempChart);