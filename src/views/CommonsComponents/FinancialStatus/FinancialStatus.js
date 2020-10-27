/* eslint-disable no-sparse-arrays */
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import database from "../../../database/database";

// eslint-disable-next-line no-unused-vars
const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
// eslint-disable-next-line no-unused-vars
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const mainChart = {
  labels: [
    "Dec/18",
    "Jan-19",
    "Feb-19",
    "Mar-19",
    "Apr-19",
    "May-19",
    "Jun-19"
  ],
  datasets: [
    {
      label: "Contracted Value",
      // fill: false,
      // lineTension: 0.1,
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: "black",
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      pointBorderWidth: 3,
      //kkk
      pointBorderColor: "black",
      pointBackgroundColor: "black",
      //pointBorderWidth: 1,
      //pointHoverRadius: 5,
      //  pointHoverBackgroundColor: 'black',
      pointHoverBorderColor: "black",
      //pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: "Invoiced Amounts",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      pointBorderWidth: 3,
      pointBorderColor: brandSuccess,
      pointBackgroundColor: brandSuccess,
      // pointHoverBackgroundColor: brandSuccess,
      pointHoverBorderColor: brandSuccess,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: "Paid",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      // borderDash: [8, 5],
      pointBorderWidth: 3,
      pointBorderColor: brandDanger,
      pointBackgroundColor: brandDanger,
      // pointHoverBackgroundColor: brandDanger,
      pointHoverBorderColor: brandDanger,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
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
    display: true
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
          maxTicksLimit: 7,
          stepSize: 5,
          max: 60
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class FinancialStatus extends Component {
  state = {
    data: {},
    mainChartOpts: { ...mainChartOpts }
  };
  componentDidMount() {
    const { financialStatus } = this.props;
    mainChart.datasets[0].data = financialStatus
      ? financialStatus.contract
      : database.financialStatus.contract;

    mainChart.datasets[1].data = financialStatus
      ? financialStatus.invoiced
      : database.financialStatus.invoiced;

    mainChart.datasets[2].data = financialStatus
      ? financialStatus.paid
      : database.financialStatus.paid;

    mainChartOpts.scales.yAxes[0].ticks.max = this.props.financialStatus
      ? 10
      : 60;
    mainChartOpts.scales.yAxes[0].ticks.stepSize = this.props.financialStatus
      ? 2
      : 5;
    this.setState({ data: mainChart, mainChartOpts });
  }
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            Financial Status
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper financial">
              <div className="chart-header">
                <p>In $ Millions</p>
              </div>
              <div className="chart-wrapper financial">
                <Line
                  data={this.state.data}
                  options={this.state.mainChartOpts}
                  height={320}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default FinancialStatus;
