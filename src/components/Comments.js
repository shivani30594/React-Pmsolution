import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class Comments extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Comments
            <div className="card-header-actions">
              <i className="fa fa-save" />
            </div>
          </CardHeader>
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default Comments;
