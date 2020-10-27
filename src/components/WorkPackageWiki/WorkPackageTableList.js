import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

const workpackageListData = {
  columns: [
    {
      label: "WorkPackage Number",
      field: "workpackage_number",
      sort: "asc"
    },
    {
      label: "WorkPackage Name",
      field: "WorkPackage_name",
      sort: "asc"
    },
    {
      label: "Duration",
      field: "duration",
      sort: "asc"
    },
    {
      label: "Start Date",
      field: "start_date",
      sort: "asc"
    },
    {
      label: "End Date",
      field: "end_date",
      sort: "asc"
    },
    {
      label: "Owners",
      field: "owners",
      sort: "asc"
    },
    {
      label: "Description",
      field: "description",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "Deliverables",
      field: "deliverables",
      sort: "asc"
    },
    {
      label: "Issues",
      field: "issues",
      sort: "asc"
    },
    {
      label: "Changes",
      field: "changes",
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

class WorkPackageTableList extends Component {
  state = {
    data: { ...workpackageListData }
  };
  componentDidMount() {
    workpackageListData.rows = this.props.workpackageList;
    this.setState({ data: { ...workpackageListData } });
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
            <ReactDataTableNew
              data={this.state.data}
              entries={10}
              entriesOptions={[10, 20, 50, 100]}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageTableList;
