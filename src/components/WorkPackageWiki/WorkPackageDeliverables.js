import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let deliverablesData = {
  columns: [
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "WorkPackage Number",
      field: "workPackageNumber",
      sort: "asc"
    },

    {
      label: "Deliverable Number",
      field: "deliverableNumber",
      sort: "asc"
    },
    {
      label: "Description",
      field: "description",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "dueDate",
      sort: "asc"
    },
    {
      label: "Estimate Effort",
      field: "estimateEffort",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "completed",
      sort: "asc"
    }
  ],
  rows: []
};

class WorkPackageDeliverables extends Component {
  state = {
    deliverablesData: { ...deliverablesData }
  };
  componentDidMount() {
    deliverablesData.rows = this.props.deliverbales;
    this.setState({ deliverablesData: { ...deliverablesData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverables
            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <ReactDataTableNew data={this.state.deliverablesData} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageDeliverables;
