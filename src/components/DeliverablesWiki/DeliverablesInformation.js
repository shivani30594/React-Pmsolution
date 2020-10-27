import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table, Input } from "reactstrap";

class DeliverablesInformation extends Component {
  render() {
    const {
      number,
      name,
      due_date,
      completed,
      status,
      workpackage,
      planEffort,
      actualEffort,
      value,
      owner,
      severity,
      type,
      description
    } = this.props.deliverInfo;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverables Information
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive bordered>
              <tbody>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Number </div>
                  </td>
                  <td className="text-left">
                    <div>{number}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Name </div>
                  </td>
                  <td className="text-left">
                    <div>{name}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Due Date</div>
                  </td>
                  <td className="text-left">
                    <div>{due_date}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>% Complete </div>
                  </td>
                  <td className="text-left">
                    <div>{completed}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Status</div>
                  </td>
                  <td className="text-left">
                    <div>{status}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Workpackage</div>
                  </td>
                  <td className="text-left">
                    <div>{workpackage}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Planned Effort</div>
                  </td>
                  <td className="text-left">
                    <div>{planEffort}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Value</div>
                  </td>
                  <td className="text-left">
                    <div>{value}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Actual Effort</div>
                  </td>
                  <td className="text-left">
                    <div>{actualEffort}</div>
                  </td>

                  <td className="basicinfo text-left">
                    <div>Owner</div>
                  </td>
                  <td className="text-left">
                    <div>{owner}</div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Severity</div>
                  </td>
                  <td className="text-left">
                    <div>{severity}</div>
                  </td>

                  <td className="basicinfo text-left">
                    <div>Type</div>
                  </td>
                  <td className="text-left">
                    <div>{type}</div>
                  </td>
                </tr>

                <tr>
                  <td className=" basicinfo text-left">Description</td>
                  <td colSpan="3">
                    <Input
                      type="textarea"
                      rows="2"
                      defaultValue={description}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default DeliverablesInformation;
