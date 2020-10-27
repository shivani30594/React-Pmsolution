import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table, Input } from "reactstrap";

class IssueDescription extends Component {
  render() {
    const {
      number,
      title,
      due_date,
      complete,
      status,
      workpackage,
      planned_effort,
      owner,
      actual_effort,
      issue_type,
      issue_severity,
      description
    } = this.props.issue;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Description
            <div className="card-header-actions">
              <span className="text-primary cursor-pointer">
                <i className="fa fa-pencil-square" />
              </span>
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive bordered>
              <tbody>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Issue Number </div>
                  </td>
                  <td className="text-left">
                    <div>{number}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Title </div>
                  </td>
                  <td className="text-left">
                    <div>{title}</div>
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
                    <div>% Complete</div>
                  </td>
                  <td className="text-left">
                    <div>{complete}</div>
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
                    <div>{planned_effort}</div>
                  </td>
                  <td className="basicinfo text-left" rowSpan="4">
                    <div>Owner</div>
                  </td>
                  <td className="text-left" rowSpan="4">
                    <div>{owner}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Actual Effort</div>
                  </td>
                  <td className="text-left">
                    <div>{actual_effort}</div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Issue Type</div>
                  </td>
                  <td className="text-left">
                    <div>
                      <select
                        className="custom-select"
                        defaultValue={issue_type}
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option>Contract</option>
                        <option>Design</option>
                        <option>Schedule</option>
                        <option>Budget</option>
                        <option>Invoice</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Issue Severity</div>
                  </td>
                  <td className="text-left">
                    <div>{issue_severity}</div>
                  </td>
                </tr>

                <tr>
                  <td className=" basicinfo text-left">Description</td>
                  <td colSpan="3">
                    <Input
                      type="textarea"
                      rows="3"
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

export default IssueDescription;
