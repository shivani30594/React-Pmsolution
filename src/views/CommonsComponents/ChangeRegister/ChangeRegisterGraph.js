/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const mainChart = {
  labels: [
    "Jan 2019",
    "Feb 2019",
    "Mar 2019",
    "Apr 2019",
    "May 2019",
    "Jun 2019",
    "July 2019",
    "Aug 2019",
    "Sep 2019",
    "Octo 2019",
    "Nov 2019",
    "Dec 2019"
  ],
  datasets: [
    {
      label: "Changes",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: "#0077b5",
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      data: [NaN, NaN, NaN, NaN, 10000, 6000, NaN, 3000, 14000]
    }
  ]
};

const mainChartOpts = {
  title: {
    display: true,
    position: "top",
    text: "TOTAL COST OF CHANGES"
  },
  lineTension: 0,
  spanGaps: true,
  showLine: true,
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: false,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
          stepSize: 2000,
          max: 16000
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 2,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class ChangeRegisterGraph extends Component {
  render() {
    return (
      <div>
        <Line data={mainChart} options={mainChartOpts} height={284} />
      </div>
    );
  }
}

export default ChangeRegisterGraph;
