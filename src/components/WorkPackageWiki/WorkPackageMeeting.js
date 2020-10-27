import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class WorkPackageMeeting extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Meetings
            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <span className="meetings">
              There are 3 meeting minutes created for this projects as follows:
            </span>
            <ListGroup className="mt-2">
              <ListGroupItem className="mt-2">
                20 Jan, 2019 - Design meeting
              </ListGroupItem>
              <ListGroupItem className="mt-2">
                23 Feb, 2019 - Design review
              </ListGroupItem>
              <ListGroupItem className="mt-2">
                20 Mar, 2019 - Design approval
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageMeeting;
