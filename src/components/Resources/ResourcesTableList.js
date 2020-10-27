import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let resourceListData = {
  columns: [
    {
      label: "Project",
      field: "project",
      sort: "asc"
    },
    {
      label: "Workpackage",
      field: "workpackage",
      sort: "asc"
    },
    {
      label: "Activity Name",
      field: "activityname",
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
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "% Progress",
      field: "per_progress",
      sort: "asc"
    }
  ],
  rows: []
};

class ResourcesTableList extends Component {
  state = {
    data: { ...resourceListData }
  };
  componentDidMount() {
    resourceListData.rows = this.props.user.resource;
    this.setState({ data: { ...resourceListData } });
  }
  render() {
    const { name } = this.props.user;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            {name} Alloaction
            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-save" />
            </div>
          </CardHeader>
          <CardBody>
            {/* <Table responsive>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Workpackage</th>
                  <th>Activity Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>% Progress</th>
                </tr>
              </thead>
              <tbody>
                <ResourcesTableListItems />
                <ResourcesTableListItems />
                <ResourcesTableListItems />
              </tbody>
            </Table> */}
            <ReactDataTableNew data={this.state.data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ResourcesTableList;
