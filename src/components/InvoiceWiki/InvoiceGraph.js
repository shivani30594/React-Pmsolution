import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const barChartData = {
  labels: [
    "Current",
    "1-30 Days",
    "31-60 Days",
    "61-90 Days",
    "91-180 Days",
    ">181 Days"
  ],
  datasets: [
    {
      label: "Series1",
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: "#467fa0"
    },
    {
      label: "Series2",
      data: [0, -6, 0, 0, 0, 6],
      backgroundColor: "#910838"
    }
  ]
};

const barChartOptions = {
  scales: {
    xAxes: [
      {
        ticks: {
          stepSize: 2,
          max: 8
        }
      }
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          stepSize: 2,
          max: 8,
          min: -8
        }
      }
    ]
  }
};

class InvoiceGraph extends Component {
  render() {
    return (
      <React.Fragment>
        <Bar data={barChartData} options={barChartOptions} height={130} />
      </React.Fragment>
    );
  }
}

export default InvoiceGraph;
