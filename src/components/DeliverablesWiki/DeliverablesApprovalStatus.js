import React, { Component } from "react";
import { Card, CardHeader, CardBody, Input, Row } from "reactstrap";

class DeliverablesApprovalStatus extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="approval">
          <CardHeader>
            Approval Status
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <Row>
              <div className="col justify-content-center">
                <div className="row approval-container">
                  {/* Item */}
                  <div className="col approval-item">
                    <div className="col-12 text-center p-0 mb-2">John Doe</div>
                    <div className="col-12 text-center p-0 ">
                      <i className="fa fa-user" />
                    </div>
                    <div className="col-12 text-center p-0 mt-2">Submitted</div>
                    <div className="col-12 text-center p-0 mt-2">
                      04/05/2019
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col approval-item">
                    <div className="col-12 text-center p-0 mb-2">QA</div>
                    <div className="col-12 text-center p-0 ">
                      <i className="fa fa-user" />
                    </div>
                    <div className="col-12 text-center p-0 mt-2">Approved</div>
                    <div className="col-12 text-center p-0 mt-2">
                      05-05-2019
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col approval-item">
                    <div className="col-12 text-center p-0 mb-2">Customer</div>
                    <div className="col-12 text-center p-0 ">
                      <i className="fa fa-user" />
                    </div>
                    <div className="col-12 text-center p-0 mt-2">Pending</div>
                  </div>
                </div>
              </div>
            </Row>
            <div className="row mt-5">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <div className="form-group">
                  <label>Comments:</label>
                  <Input type="textarea" name="comments" />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default DeliverablesApprovalStatus;
