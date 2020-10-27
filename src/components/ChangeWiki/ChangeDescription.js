import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table, Input } from "reactstrap";

class ChangeDescription extends Component {
  render() {
    const {
      number,
      title,
      due_date,
      complete,
      change_status,
      value,
      workpackage,
      planned_effort,
      owner,
      actual_effort,
      impact_type,
      severity,
      description
    } = this.props.changes;
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
                    <div>Change Number </div>
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
                    <div>{change_status}</div>
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
                    <div>{actual_effort}</div>
                  </td>
                  <td className="basicinfo text-left" rowSpan="3">
                    <div>Owner</div>
                  </td>
                  <td className="text-left" rowSpan="3">
                    <div>{owner}</div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Impact Type</div>
                  </td>
                  <td className="text-left">
                    <div>{impact_type}</div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Severity</div>
                  </td>
                  <td className="text-left">
                    <div>{severity}</div>
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

export default ChangeDescription;
