import React, { Component } from "react";
import { Row, Col, Input, FormGroup, Button } from "reactstrap";

class ProjectForm extends Component {
  state = {
    startDate: new Date()
  };
  handleDateChange = date => {
    this.setState({ startDate: date });
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="3">
            <FormGroup>
              <label>
                Project Name <b className="text-danger">*</b>
              </label>
              <Input type="text" name="name" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Project Type <b className="text-danger">*</b>
              </label>
              <Input type="select" name="type" className="custom-select">
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
                Opportunity Number <b className="text-danger">*</b>
              </label>
              <Input type="text" name="name" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Organization <b className="text-danger">*</b>
              </label>
              <Input type="text" name="name" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Federal Project <b className="text-danger">*</b>
              </label>
              <Input type="select" name="public" className="custom-select">
                <option disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Currency <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="public"
                className="custom-select"
                defaultValue="USD"
              >
                <option disabled selected>
                  Select
                </option>
                <option value="Y">USD</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Partnering Needed <b className="text-danger">*</b>
              </label>
              <Input type="select" name="public" className="custom-select">
                <option disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Stage <b className="text-danger">*</b>
              </label>
              <Input type="text" name="name" />
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Project Manager <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="public"
                className="custom-select"
                defaultValue="Suresh Padmanabhan(SP)"
              >
                <option disabled selected>
                  Select
                </option>
                <option>Suresh Padmanabhan(SP)</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Project Approver <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="public"
                className="custom-select"
                defaultValue="Neeraj Garg (NG)"
              >
                <option disabled selected>
                  Select
                </option>
                <option>Neeraj Garg (NG)</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                P&L Manager <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="public"
                className="custom-select"
                defaultValue="Arindam Mukherjee(AM)"
              >
                <option disabled selected>
                  Select
                </option>
                <option>Arindam Mukherjee(AM)</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Region <b className="text-danger">*</b>
              </label>
              <Input
                type="select"
                name="public"
                className="custom-select"
                defaultValue="United States"
              >
                <option disabled selected>
                  Select
                </option>
                <option value="N">United States</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Available to Copy <b className="text-danger">*</b>
              </label>
              <Input type="select" name="public" className="custom-select">
                <option disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="3">
            <FormGroup>
              <label>
                Type <b className="text-danger">*</b>
              </label>
              <Input type="select" name="type" className="custom-select">
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
          <Col lg="6">
            <FormGroup>
              <label>Description</label>
              <Input
                type="textarea"
                rows="3"
                name="description"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg="12">
            <FormGroup className="text-center">
              <Button color="danger" onClick={this.props.toggle}>
                Close
              </Button>
              <Button
                onClick={this.props.onSubmit}
                name="submit"
                color="primary"
              >
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ProjectForm;
