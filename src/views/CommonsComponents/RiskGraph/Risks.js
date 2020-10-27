/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ReactAnyChart from "anychart-react";
import anyChart from "anychart";
import "./Risk.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Popover,
  PopoverBody,
  PopoverHeader
} from "reactstrap";
import { Link } from "react-router-dom";
import RiskScore from "./RiskScore.js";
import database from "../../../database/database";

let graphData = [];

class Risks extends Component {
  state = {
    popoverOpen: false,
    data: []
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  componentDidMount() {
    this.props.riskRegister
      ? (graphData = this.props.riskRegister.risks)
      : (graphData = database.riskRegister.risks);
    this.setState({ data: graphData });
  }

  render() {
    let stage = anyChart.graphics.create();
    let heatmap = anyChart.heatMap(this.state.data);
    let customColorScale = anyChart.scales.ordinalColor();
    customColorScale.ranges([
      { less: 6 },
      { from: 6, to: 9 },
      { from: 9, to: 12 },
      { from: 12, to: 16 },
      { from: 16, to: 20 },
      { greater: 20 }
    ]);
    customColorScale.colors([
      "#0aaf26",
      "#f7d660",
      "#f7d660",
      "#ea452c",
      "#ea452c",
      "#343a40"
    ]);
    heatmap.colorScale(customColorScale);
    // heatmap.title("Heat Map: Labels and Tooltips (Formatting Functions)");
    heatmap.container("container");

    heatmap.labels().useHtml(true);
    heatmap.labels().format(function() {
      return this.getData("custom_field");
    });
    heatmap.tooltip().format(function() {
      const heat = this.heat;
      const level =
        heat <= 6
          ? "Low"
          : heat < 12
            ? "Medium"
            : heat <= 20
              ? "High"
              : "Extreme";
      return `${level} (${heat}%)\n\n Risk Score: ${this.getData("custom_field") ? this.getData("custom_field") : 0}`;
    });
    // heatmap.yAxis().title("Likelihood");

    heatmap
      .xAxis()
      .labels()
      .format(function() {
        var value = "";
        return value;
      });

    heatmap
      .yAxis()
      .labels()
      .format(function() {
        var value = "";
        return value;
      });

    const countRisk = { "6": 0, "9": 0, "12": 0, "16": 0, "20": 0 };

    const { week, overdue, today, tommorow, month } = this.props.riskRegister
      ? this.props.riskRegister
      : database.riskRegister;

    this.state.data.forEach(({ heat, custom_field }) => {
      if ([6, 9, 12, 16, 20].includes(heat) && custom_field !== "") {
        countRisk[heat] = countRisk[heat] + 1;
      }
    });

    return (
      <div>
        <Card>
          <CardHeader>
            Risk Register
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  className="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <a id="Popover1" href="#" onClick={() => this.toggle()}>
                <i className="fa fa-ellipsis-h card-header-icons" />
              </a>
              <Popover
                placement="bottom"
                isOpen={this.state.popoverOpen}
                target="Popover1"
                toggle={() => this.toggle()}
              >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  The text you are looking for is temporarily unavailable.
                </PopoverBody>
              </Popover>
              {/* <i className="fa fa-th"></i> */}
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <div className="col-xs-12 col-sm-12 col-lg-5 position-relative">
                <div className="chart-wrapper risk">
                  <div className="chart-header">
                    <p>Likelihood</p>
                  </div>
                  <ReactAnyChart
                    instance={stage}
                    charts={[heatmap]}
                    height={200}
                  />

                  <div className="chart-footer">Impact</div>
                </div>
              </div>
              <Col xs="12" sm="12" lg="2">
                <RiskScore countRisk={countRisk} />
              </Col>
              <Col xs="12" sm="12" lg="5">
                <div className="title-wrap">
                  <h6 className="left">TARGET DATE</h6>
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
                      <Link to="/500">
                        <div className="inner-td-wrapper">
                          <h4>{month}</h4>
                          <p>THIS MONTH</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Risks;
