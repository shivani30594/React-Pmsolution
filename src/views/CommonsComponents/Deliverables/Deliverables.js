import React, { Component } from "react";
import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import _sum from "lodash/sum";
import database from "../../../database/database";

const labels = ["Not Started", "Started", "Completed", "On Hold", "Action"];
const datasets = [
  {
    data: [3, 6, 16, 0, 0],
    backgroundColor: [
      "#0077b5", // Blue
      "#fc6d21", // Orange
      "#06a54e", // Green
      "#59239d", // Purple
      "#bf2511" //red
    ]
  }
];
const text = [`${_sum(datasets["0"].data)}`, "Deliverables"];
const deliverablesData = { labels, datasets, text };

class Deliverables extends Component {
  state = {
    data: { ...deliverablesData }
  };
  componentDidMount() {
    const { status } = this.props.deliverablesRegister
      ? this.props.deliverablesRegister
      : database.deliverablesRegister;
    const newArr = Object.keys(status).map(item => status[item]);
    deliverablesData.datasets[0].data = newArr;
    deliverablesData.text = [
      `${_sum(deliverablesData.datasets[0].data)}`,
      "Deliverables"
    ];
    this.setState({ data: { ...deliverablesData } });
  }
  render() {
    const { overdue, today, tommorow, week, month } = this.props
      .deliverablesRegister
      ? this.props.deliverablesRegister
      : database.deliverablesRegister;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverable Register
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
          <CardBody>
            <Row>
              <Col sm="12" className="mx-auto col-doughnut">
                <div className="chart-wrapper">
                  <Doughnut
                    data={deliverablesData}
                    options={this.props.options}
                    height={150}
                    width={150}
                  />
                  {/*<span className="deliverable doughnutText text-center">
                    <p>{totalCount}</p> <span>Deliverable </span>
                  </span> */}
                </div>
              </Col>
              <Col sm="12" lg="3" className="mr-auto">
                <div className="chart-wrapper">
                  <h6 className="chart-title">STATUS</h6>
                  {deliverablesData.datasets[0].data.map((data, index) => (
                    <div className="summary-status-value-wrap" key={index}>
                      <div className="left">
                        <div
                          className="property-value"
                          style={{
                            backgroundColor:
                              deliverablesData.datasets[0].backgroundColor[
                                index
                              ]
                          }}
                        />
                        <div className="property">
                          {deliverablesData.labels[index]}
                        </div>
                      </div>
                      <div className="right">{data}</div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs="12" sm="12" lg="5">
                <div className="title-wrap">
                  <h6 className="left">DUE DATE</h6>
                  <Link to="/500">
                    <h6 className="right">{overdue} OVERDUE</h6>
                  </Link>
                </div>
                <Row>
                  <Col xs="8" sm="6" lg="6">
                    <div className="target-date-wrapper">
                      <div className="inner-td-wrapper">
                        <h4>{today}</h4>
                        <p>TODAY</p>
                      </div>
                      <div className="inner-td-wrapper">
                        <h4>{week}</h4>
                        <p>THIS WEEK</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs="8" sm="6" lg="6">
                    <div className="target-date-wrapper">
                      <div className="inner-td-wrapper">
                        <h4>{tommorow}</h4>
                        <p>TOMMOROW</p>
                      </div>
                      <div className="inner-td-wrapper">
                        <h4>{month}</h4>
                        <p>THIS MONTH</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Deliverables;
