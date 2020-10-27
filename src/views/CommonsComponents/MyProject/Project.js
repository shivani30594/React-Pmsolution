import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
import { Card, CardBody, CardHeader } from "reactstrap";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
import _maxBy from "lodash/maxBy";
import database from "../../../database/database";

// eslint-disable-next-line no-unused-vars

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
// eslint-disable-next-line no-unused-vars
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

let inProgressData = [];
let dangerData = [];
let warningData = [];

let data = [];

database.projects.forEach(item => {
  data.push({
    x: item.financial_per_complete,
    y: item.execution_per_complete,
    contract: item.contract_value,
    project: item.name
  });
});

// const data = [
//   { x: 70, y: 68, contract: 6500000, project: "Shangri-la - SLUB Pha" },
//   { x: 60, y: 54, contract: 2300000, project: "Tai Kok Tsui, Kowloon" },
//   { x: 30, y: 76, contract: 320000, project: "HKHA  for Supervising" },
//   { x: 40, y: 80, contract: 800000, project: "Tsing Yi Indoor Recre" },
//   { x: 84, y: 86, contract: 1589000, project: "810B West KLN Terminu" },
//   { x: 91, y: 93, contract: 5000000, project: "TWGH Wong Fat Nam Col" }
// ];
// const min = _minBy(data, "contract").contract;

const max = _maxBy(data, "contract").contract;
// const average = (max + min) / 2;
// const range = max - min;
data.forEach(({ x, y, contract, project }) => {
  // console.log((contract / 2 + average / 2) / 2 * 100);
  const n = y / x;
  const r = parseInt(contract / max * 30 + 8);
  const item = { x, y, r, project, contract };
  n >= 2
    ? dangerData.push(item)
    : n >= 1 && n < 2
      ? warningData.push(item)
      : inProgressData.push(item);
});

const dataBubble = {
  label: ["Danger", "Warning", "Green"],
  datasets: [
    {
      backgroundColor: brandDanger,
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      fill: false,
      lineTension: 0.1,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      label: "Danger",
      data: dangerData
    },
    {
      label: "Warning",
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      fill: false,
      lineTension: 0.1,
      backgroundColor: brandWarning,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: warningData
    },
    {
      label: "In Progress",
      backgroundColor: brandSuccess,
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      borderDash: [],
      fill: true,
      lineTension: 0.1,
      borderCapStyle: "butt",
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: inProgressData

      // data: [
      //   { x: 80, y: 25, r: 10 },
      //   { x: 90, y: 15, r: 20 },
      //   { x: 5, y: 42, r: 10 },
      //   { x: 12, y: 55, r: 25 },
      //   { x: 20, y: 5, r: 0 },
      //   { x: 20, y: 40, r: 0 }
      // ]
    }
  ]
};

const dataBubbleChartOpts = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 7,
          stepSize: Math.ceil(100 / 5),
          max: 100
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: Math.ceil(100 / 5),
          max: 100
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 20,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        const datasetIndex = tooltipItem.datasetIndex;
        const Index = tooltipItem.index;
        const project = data.datasets[datasetIndex].data[Index];
        return (
          "Project : " +
          project.project +
          "\n Contract Value : $" +
          project.contract
        );
      }
    }
  }
};

class Project extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>My Project</CardHeader>
          <CardBody className="myproejct-boxs">
            <div className="chart-wrapper project">
              <div className="chart-header">
                <p>Financial Percent Complete</p>
              </div>
              <Bubble data={dataBubble} options={dataBubbleChartOpts} />
              <div className="chart-footer">
                <p>Physical Percent Complete</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Project;
