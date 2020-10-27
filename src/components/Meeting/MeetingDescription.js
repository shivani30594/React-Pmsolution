import React, { Component } from "react";
import { Card, CardHeader, CardBody, Input } from "reactstrap";

class MeetingDescription extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Meeting Description
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <Input type="textarea" name="meetingdesc" rows="6" />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default MeetingDescription;
