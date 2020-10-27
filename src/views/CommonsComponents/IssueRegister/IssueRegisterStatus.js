import React from "react";
import { Row, Col } from "reactstrap";

const IssueRegisterStatus = props => {
  return (
    <React.Fragment>
      <Row>
        <Col xs="8" sm="6" lg="6">
          <div className="chart-wrapper">
            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "#edc02d" }}
                />
                <div className="property">Overdue</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[0]}
              </div>
            </div>

            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "#bf2511" }}
                />
                <div className="property">Action Required</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[1]}
              </div>
            </div>

            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "#59239d" }}
                />
                <div className="property">On Hold</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[2]}
              </div>
            </div>
            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "black" }}
                />
                <div className="property">At Risk</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[3]}
              </div>
            </div>
          </div>
        </Col>
        <Col xs="8" sm="6" lg="6">
          <div className="chart-wrapper">
            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "#06a54e" }}
                />
                <div className="property">Completed</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[4]}
              </div>
            </div>
            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "#0077b5" }}
                />
                <div className="property">Not started</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[5]}
              </div>
            </div>
            <div className="summary-status-value-wrap">
              <div className="left">
                <div
                  className="property-value"
                  style={{ backgroundColor: "#fc6d21" }}
                />
                <div className="property">Started</div>
              </div>
              <div className="right">
                {props.issueProjectData.datasets[0].data[6]}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IssueRegisterStatus;
