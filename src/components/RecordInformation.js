import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const intialState = {
  isOpenSchedule: false,
  isWorkflowSchedule: false,
  isAuditSchedule: false,
  isplusclass1: true,
  isplusclass2: true,
  isplusclass3: true
};

class RecordInformation extends Component {
  state = { ...intialState };
  toggle = () => {
    this.setState({
      ...intialState,
      isOpenSchedule: !this.state.isOpenSchedule,
      isplusclass1: !this.state.isplusclass1
    });
  };
  toggleWorkFlow = () => {
    this.setState({
      ...intialState,
      isWorkflowSchedule: !this.state.isWorkflowSchedule,
      isplusclass2: !this.state.isplusclass2
    });
  };
  toggleAuditInfo = () => {
    this.setState({
      ...intialState,
      isAuditSchedule: !this.state.isAuditSchedule,
      isplusclass3: !this.state.isplusclass3
    });
  };
  render() {
    const {
      isScheduleinfo = true,
      isWorkflowinfo = true,
      isAuditinfo = true
    } = this.props;
    const scheduleinfo = this.props.record_information.schedule_info;
    const workflowinfo = this.props.record_information.workflow_info;
    const auditinfo = this.props.record_information.audit_info;

    return (
      <React.Fragment>
        <Card className="position-sticky">
          <CardHeader>
            Record Information
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            {isScheduleinfo && (
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading
                    className="cursor-pointer"
                    onClick={() => this.toggle()}
                  >
                    <i
                      className={
                        this.state.isplusclass1
                          ? "fa-plus-minus fa fa-plus-square-o mr-2"
                          : "fa-plus-minus fa fa-minus-square-o mr-2"
                      }
                    />
                    <span className="text-primary">Schedule Information</span>
                  </ListGroupItemHeading>
                  <Collapse isOpen={this.state.isOpenSchedule}>
                    {scheduleinfo.map((item, index) => (
                      <ListGroupItemText
                        className="pt-3 pr-3 pl-3 mb-0 d-flex flex-wrap"
                        key={index}
                      >
                        <React.Fragment>
                          <small className="text-muted mr-3">
                            <b>{item.title} : </b>
                          </small>
                          <small className="text-muted">{item.value}</small>
                          {/* <hr className="mb-0 w-100" /> */}
                        </React.Fragment>
                        
                      </ListGroupItemText>
                    ))}
                  </Collapse>
                </ListGroupItem>
              </ListGroup>
            )}
            {isWorkflowinfo && (
              <ListGroup className="mt-3">
                <ListGroupItem>
                  <ListGroupItemHeading
                    className="cursor-pointer"
                    onClick={() => this.toggleWorkFlow()}
                  >
                    <i
                      className={
                        this.state.isplusclass2
                          ? "fa-plus-minus fa fa-plus-square-o mr-2"
                          : "fa-plus-minus fa fa-minus-square-o mr-2"
                      }
                    />
                    <span className="text-primary">Workflow Information</span>
                  </ListGroupItemHeading>
                  <Collapse isOpen={this.state.isWorkflowSchedule}>
                    {workflowinfo.map((item, index) => (
                      <ListGroupItemText
                        className="pt-3 pr-3 pl-3 mb-0 d-flex flex-wrap"
                        key={index}
                      >
                        <React.Fragment key={index}>
                          <small className="text-muted mr-3">
                            <b>{item.title} : </b>
                          </small>
                          <small className="text-muted">{item.value}</small>
                          {/* <hr className="mb-0 w-100" /> */}
                        </React.Fragment>
                      </ListGroupItemText>
                    ))}
                  </Collapse>
                </ListGroupItem>
              </ListGroup>
            )}
            {isAuditinfo && (
              <ListGroup className="mt-3">
                <ListGroupItem>
                  <ListGroupItemHeading
                    className="cursor-pointer"
                    onClick={() => this.toggleAuditInfo()}
                  >
                    <i
                      className={
                        this.state.isplusclass3
                          ? "fa-plus-minus fa fa-plus-square-o mr-2"
                          : "fa-plus-minus fa fa-minus-square-o mr-2"
                      }
                    />
                    <span className="text-primary">Audit Information</span>
                  </ListGroupItemHeading>
                  <Collapse isOpen={this.state.isAuditSchedule}>
                    {auditinfo.map((item, index) => (
                      <ListGroupItemText
                        className="pt-3 pr-3 pl-3 mb-0 d-flex flex-wrap"
                        key={index}
                      >
                        <React.Fragment key={index}>
                          <small className="text-muted mr-3">
                            <b>{item.title} : </b>
                          </small>
                          <small className="text-muted">{item.value}</small>
                          {/* <hr className="mb-0 w-100" /> */}
                        </React.Fragment>
                      </ListGroupItemText>
                    ))}
                  </Collapse>
                </ListGroupItem>
              </ListGroup>
            )}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RecordInformation;
