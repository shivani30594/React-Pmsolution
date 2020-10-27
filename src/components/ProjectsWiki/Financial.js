import React, { Component } from "react";
import {Row, Col } from "reactstrap";
import database from "../../database/database";

class Financial extends Component {
  render() {
    const {
      contractedAmount,
      approvedCost,
      currentCost,
      invoiced,
      backlog,
      paid,
      overdue
    } = database.financialDetails;
    return (
      <React.Fragment>
        <Row className="financial-detail">
          <Col sm="12" md="6" lg="5">
            <label>
              <span className="financial-title">Contracted Amount:</span>{" "}
              {contractedAmount}
            </label>
            <br />
            <label>
              <span className="financial-title">Approved Cos:</span>{" "}
              {approvedCost}{" "}
            </label>
            <br />
            <label>
              <span className="financial-title">Current Amount:</span>{" "}
              {currentCost}{" "}
            </label>
          </Col>
          <Col sm="12" md="6" lg="5">
            <label>
              <span className="financial-title">Invoiced:</span> {invoiced}
            </label>
            <br />
            <label>
              <span className="financial-title">Backlog:</span> {backlog}
            </label>
            <br />
            <label>
              <span className="financial-title">Paid:</span> {paid} (<span className="financial-title">
                Overdue:
              </span>{" "}
              {overdue})
            </label>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Financial;
