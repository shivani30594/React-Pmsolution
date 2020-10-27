import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import ChangeRegisterGraph from "./ChangeRegisterGraph";
import _sum from "lodash/sum";

const labels = ["Logged", "Closed"];
const datasets = [
  {
    data: [],
    backgroundColor: [
      "#edc02d", // yellow
      "#fc6d21" // Orange
    ]
  }
];
const text = [`${_sum(datasets["0"].data)}`, "Changes"];
let changeRegisterData = { labels, datasets, text };

class ChangeRegister extends Component {
  state = {
    data: { ...changeRegisterData }
  };
  componentDidMount() {
    changeRegisterData.datasets[0].data = [];
    this.props.changeRegisterGraph
      ? (changeRegisterData.datasets[0].data = this.props.changeRegisterGraph)
      : (changeRegisterData.datasets[0].data = [5, 1]);
    changeRegisterData.text = [
      `${_sum(changeRegisterData.datasets[0].data)}`,
      "Changes"
    ];
    this.setState({ data: { ...changeRegisterData } });
  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            Change Register
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
          <CardBody className="d-flex flex-column justify-content-center">
            <Row>
              <Col sm="12" className="mx-auto col-doughnut">
                <div className="chart-wrapper">
                  <Doughnut
                    data={changeRegisterData}
                    options={this.props.options}
                    height={150}
                    width={150}
                  />
                  {/* <span className="doughnutText text-center">
                    <p>{totalCount}</p> <span>Changes</span>
                  </span> */}
                </div>
              </Col>
              <Col md="12" lg="3">
                <div className="chart-wrapper">
                  <h6 className="chart-title">Status</h6>
                  <div className="summary-status-value-wrap">
                    <div className="left">
                      <div
                        className="property-value"
                        style={{ backgroundColor: "#edc02d" }}
                      />
                      <div className="property">Logged</div>
                    </div>
                    <div className="right">
                      {changeRegisterData.datasets[0].data[0]}
                    </div>
                  </div>

                  <div className="summary-status-value-wrap">
                    <div className="left">
                      <div
                        className="property-value"
                        style={{ backgroundColor: "#fc6d21" }}
                      />
                      <div className="property">Closed</div>
                    </div>
                    <div className="right">
                      {changeRegisterData.datasets[0].data[1]}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="12" lg="5">
                <div className="title-wrap">
                  <h6 className="left">TARGET DATE</h6>
                  {/* <h6 className="right">3 OVERDUE</h6> */}
                </div>
                <Row>
                  <Col xs="8" sm="6" lg="6">
                    <div className="target-date-wrapper">
                      <Link to="/500">
                        <div className="inner-td-wrapper">
                          <h4>1</h4>
                          <p>TODAY</p>
                        </div>
                      </Link>
                      <Link to="/500">
                        <div className="inner-td-wrapper">
                          <h4>1</h4>
                          <p>THIS WEEK</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col xs="8" sm="6" lg="6">
                    <div className="target-date-wrapper">
                      <div className="inner-td-wrapper">
                        <h4>0</h4>
                        <p>TOMMOROW</p>
                      </div>
                      <Link to="/500">
                        <div className="inner-td-wrapper">
                          <h4>1</h4>
                          <p>THIS MONTH</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="12" lg="12">
                <ChangeRegisterGraph />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ChangeRegister;
