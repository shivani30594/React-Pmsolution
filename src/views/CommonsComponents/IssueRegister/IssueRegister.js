import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import IssueRegisterStatus from "./IssueRegisterStatus";
import _sum from "lodash/sum";
import database from "../../../database/database";

const labels = [
  "Overdue",
  "Action Required",
  "On Hold",
  "At Risk",
  "Completed",
  "Not Started",
  "Started"
];

const datasets = [
  {
    data: [8, 0, 0, 0, 13, 0, 5],
    backgroundColor: [
      "#edc02d", // Yellow
      "#bf2511", // Red
      "#59239d", // Purple
      "#09090a", // Black
      "#06a54e", // Green
      "#0077b5", // Blue
      "#fc6d21" // Orange
    ]
  }
];

const text = [`${_sum(datasets["0"].data)}`, "Issues"];
const issueProjectData = { labels, datasets, text };

class IssueRegister extends Component {
  state = {
    data: { ...issueProjectData }
  };
  componentDidMount() {
    const { status } = this.props.issueRegister
      ? this.props.issueRegister
      : database.issueRegister;
    const newArr = Object.keys(status).map(i => status[i]);
    issueProjectData.datasets[0].data = newArr;
    issueProjectData.text = [
      `${_sum(issueProjectData.datasets[0].data)}`,
      "Issues"
    ];
    this.setState({ data: { ...issueProjectData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Issue Register
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  className="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i className="fa fa-ellipsis-h card-header-icons" />
            </div>
          </CardHeader>
          <CardBody className="d-flex flex-column">
            <Row>
              <Col sm="12" className="mx-auto col-doughnut">
                <div className="chart-wrapper">
                  <Doughnut
                    data={this.state.data}
                    options={this.props.options}
                    height={150}
                    width={150}
                  />
                </div>
              </Col>
              <Col sm="12" md="7" className="mr-auto">
                <h6 className="chart-title">STATUS</h6>
                <IssueRegisterStatus issueProjectData={issueProjectData} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default IssueRegister;
