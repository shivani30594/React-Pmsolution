import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

import ReactDataTableNew from "../ReactDataTableNew";

const riskListData = {
  columns: [
    {
      label: "Risk Number",
      field: "risk_number",
      sort: "asc"
    },
    {
      label: "Title",
      field: "title",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "Assignee",
      field: "assignee",
      sort: "asc"
    },
    {
      label: "Associated To",
      field: "associated_to",
      sort: "asc"
    },
    {
      label: "Pre-Mitigation Cost",
      field: "pre-mitigation_cost",
      sort: "asc"
    },
    {
      label: "Mitigation Cost",
      field: "mitigation_cost",
      sort: "asc"
    },
    {
        label: "Post Mitigation Cost",
        field: "post_mitigation_cost",
        sort: "asc"
    },
    {
      label: "% Complete",
      field: "per_complete",
      sort: "asc"
    },
    {
      label: "Public",
      field: "public",
      sort: "asc"
    }
  ],
  rows: []
};

class RiskTableList extends Component {
  state = {
    data: { ...riskListData }
  };
  componentDidMount() {
    riskListData.rows = this.props.riskList;
    this.setState({ data: { ...riskListData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <ReactDataTableNew data={this.state.data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RiskTableList;
