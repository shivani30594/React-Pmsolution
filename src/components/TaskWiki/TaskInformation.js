import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class TaskInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Task Information
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default TaskInformation;
