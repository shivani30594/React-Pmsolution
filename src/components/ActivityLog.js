import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class ActivityLog extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            {this.props.title}
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

export default ActivityLog;
