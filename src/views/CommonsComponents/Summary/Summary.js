import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import database from "../../../database/database";

const Summary = props => {
  let tiles = props.tiles ? props.tiles : database.tiles;
  return (
    <React.Fragment>
      <Col xs="8" sm="4" lg="2" className="pr-0">
        <Card className="text-white bg-info">
          <CardBody className="pb-0">
            <div className="text-value">{tiles.per_complete}</div>
            <Link to="/500">
              <div className="text-summary">Complete</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <div className="text-value">{tiles.active_workpackages}</div>
            <Link to="/500">
              <div className="text-summary"> Active Workpackages</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-warning">
          <CardBody className="pb-0">
            <div className="text-value">{tiles.open_activities}</div>
            <Link to="/500">
              <div className="text-summary">Open Activitiess</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-warning">
          <CardBody className="pb-0">
            <div className="text-value">{tiles.open_issues}</div>
            <Link to="/500">
              <div className="text-summary">Open Issues</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <div className="text-value">{tiles.pending_risks}</div>
            <Link to="/500">
              <div className="text-summary">Pending Risks</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper" style={{ height: "30px" }} />
        </Card>
      </Col>
      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <div className="text-value">{tiles.pending_changes}</div>
            <Link to="/500">
              <div className="text-summary">Pending Changes</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper" style={{ height: "30px" }} />
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Summary;
