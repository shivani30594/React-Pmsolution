import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let activityLogData = {
  columns: [
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "By",
      field: "by",
      sort: "asc"
    },
    {
      label: "Comment",
      field: "comment",
      sort: "asc"
    }
  ],
  rows: []
};

class DeliverablesActivityLog extends Component {
  state = {
    data: { ...activityLogData }
  };
  componentDidMount() {
    activityLogData.rows = this.props.activityLog;
    this.setState({ data: { ...activityLogData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverables ActivityLog
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <ReactDataTableNew
              data={this.state.data}
              paging={false}
              searching={false}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default DeliverablesActivityLog;
