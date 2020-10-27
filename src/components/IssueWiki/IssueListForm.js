import React, { Component } from "react";
import { Row, Col, FormGroup, Input, Button } from "reactstrap";
import DatePicker from "react-datepicker";

class IssueListForm extends Component {
  state = {
    formValues: {
      number: "",
      name: "",
      title: "",
      due_date: "",
      complete: "",
      issue_status: "",
      workpackage: "",
      planned_effort: "",
      actual_effort: "",
      owner: [],
      issue_type: "",
      issue_severity: "",
      public: ""
    },
    startDate: new Date(),
    assignee_suresh: false,
    assignee_arindam: false,
    assignee_neeraj: false
  };
  toggleAssign = ({ target: { name } }) => {
    this.setState({ [name]: !this.state[name] });
  };
  handleChange = e => {
    const { formValues } = this.state;
    formValues[e.target.name] = e.target.value;
    this.setState({ formValues });
  };
  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  onSubmit = () => {
    const {
      assignee_arindam,
      assignee_neeraj,
      assignee_suresh,
      formValues,
      startDate
    } = this.state;

    let assignee = [];
    assignee_arindam &&
      assignee.push(
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      );
    assignee_neeraj &&
      assignee.push(
        <a
          href="#/resourcelist/ee36cf63-b54e-4a14-8422-91b731b148b4"
          className="text-primary"
        >
          @Neeraj
        </a>
      );
    assignee_suresh &&
      assignee.push(
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      );
    formValues["owner"] = assignee;
    formValues["due_date"] = startDate.toString();
    this.setState({ formValues });
    this.props.handleSubmit(this.state.formValues);
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="3">
            <FormGroup>
              <label>
                Issue Number <b className="text-danger">*</b>
              </label>
              <Input type="text" onChange={this.handleChange} name="number" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Issue Name <b className="text-danger">*</b>
              </label>
              <Input type="text" onChange={this.handleChange} name="name" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Issue Title <b className="text-danger">*</b>
              </label>
              <Input type="text" onChange={this.handleChange} name="title" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Due Date <b className="text-danger">*</b>
              </label>
              <div className="custome-datepicker w-100">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateChange}
                  className="form-control col-12 w-100"
                  showYearDropdown
                  showMonthDropdown
                  useShortMonthInDropdown
                  todayButton={"Today"}
                  dateFormat="MM-dd-yyyy"
                />
              </div>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>% Completed</label>
              <Input type="text" name="complete" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Status <b className="text-danger">*</b>
              </label>
              <Input
                onChange={this.handleChange}
                type="select"
                name="issue_status"
                className="custom-select"
              >
                <option disabled selected>
                  Select
                </option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Overdue</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>Workpackage</label>
              <Input
                type="text"
                name="workpackage"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>Plan Effort</label>
              <Input
                type="number"
                name="planned_effort"
                onChange={this.handleChange}
                defaultValue="0"
              />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>Actual Effort</label>
              <Input
                type="number"
                name="actual_effort"
                onChange={this.handleChange}
                defaultValue="0"
              />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Assignee <b className="text-danger">*</b>
              </label>
              <div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheckSuresh"
                    name="assignee_suresh"
                    onChange={this.toggleAssign}
                  />
                  <label class="custom-control-label" for="customCheckSuresh">
                    Suresh
                  </label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheckArindam"
                    name="assignee_arindam"
                    onChange={this.toggleAssign}
                  />
                  <label class="custom-control-label" for="customCheckArindam">
                    Arindam
                  </label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheckNeeraj"
                    name="assignee_neeraj"
                    onChange={this.toggleAssign}
                  />
                  <label class="custom-control-label" for="customCheckNeeraj">
                    Neeraj
                  </label>
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Issue Type <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="issue_type"
                className="custom-select"
                onChange={this.handleChange}
              >
                <option disabled selected>
                  Select
                </option>
                <option>Design</option>
                <option>Schedule</option>
                <option>Budget</option>
                <option>Invoice</option>
                <option>Contract</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Severity <b className="text-danger">*</b>
              </label>
              <Input
                type="text"
                name="issue_severity"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Public <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="public"
                className="custom-select"
                onChange={this.handleChange}
              >
                <option disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="9">
            <FormGroup>
              <label>Comments</label>
              <Input
                type="textarea"
                rows="3"
                name="comment"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg="12">
            <FormGroup className="text-center">
              <Button color="danger" onClick={this.props.toggle}>
                Close
              </Button>
              <Button onClick={this.onSubmit} name="submit" color="primary">
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default IssueListForm;
