import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import ActivitiesTableListItems from "./ActivitiesTableListItems";
import { Link } from "react-router-dom";
import {Row,Col} from "reactstrap";

class ActivitiesTableList extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectwiki/60453005">
                          <i className="fa fa-map-marker" />Extensions N/Cape Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">

        <Card>
          <CardHeader>
            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-save" />
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Workpackage</th>
                  <th>Activity Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>% Progress</th>
                  <th>Assignee</th>
                  <th>PlanEffort</th>
                  <th>ActualEffort</th>
                </tr>
              </thead>
              <tbody>
                <ActivitiesTableListItems />
                <ActivitiesTableListItems />
                <ActivitiesTableListItems />
              </tbody>
            </Table>
          </CardBody>
        </Card>

        </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ActivitiesTableList;
