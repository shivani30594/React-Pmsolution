/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
class WorkPackages extends Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { activeTab } = this.state;
    const tasks = this.props.tasks;
    const { workPackages } = this.props.tasks[0];
    console.log(this.props.deliverablesInfo);
    return (
      <React.Fragment>
        <Card>
          <CardHeader className="cardtabsboxs">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "1" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("1")}
                >
                  WBS
                </a>
              </li>

              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "2" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("2")}
                >
                  WorkPackages
                </a>
              </li>

              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "3" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("3")}
                >
                  Deliverables
                </a>
              </li>
              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "4" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("4")}
                >
                  Progress
                </a>
              </li>
            </ul>

            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemHeading>Top Tasks:</ListGroupItemHeading>
                    <ListGroupItemText>
                      {tasks.map((task, index) => (
                        <React.Fragment key={index}>
                          <Link
                            to={routesURL.TASK_WIKI}
                            className="text-capitalize"
                          >
                            {task.name}
                          </Link>
                          <br />
                        </React.Fragment>
                      ))}
                      <Link to={routesURL.TASK_WIKI}>
                        Requirements-1.0 (Complete)
                      </Link>
                      <br />

                      <Link to={routesURL.TASK_WIKI}>
                        Design - 2.0 (Open, 06/30/19){" "}
                      </Link>
                      <br />
                      <Link to={routesURL.WBS}> All Tasks ... </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="2">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        Overdue Workpackages :
                      </ListGroupItemHeading>
                      {workPackages.map(
                        ({ wbsType, id }) =>
                          ["Design"].includes(wbsType) && (
                            <React.Fragment>
                              <Link
                                to={routesURL.WORKPACKAGE_WIKI + id}
                                className="text-capitalize"
                              >
                                {wbsType}
                              </Link>
                              <br />
                            </React.Fragment>
                          )
                      )}

                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        In Progress Workpackages :
                      </ListGroupItemHeading>

                      {workPackages.map(
                        ({ id, wbsType }) =>
                          ["Modelling"].includes(wbsType) && (
                            <React.Fragment>
                              <Link
                                to={routesURL.WORKPACKAGE_WIKI + id}
                                className="text-capitalize"
                              >
                                {wbsType}
                              </Link>
                              <br />
                            </React.Fragment>
                          )
                      )}
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Not started Workpackage :{" "}
                      </ListGroupItemHeading>

                      {workPackages.map(
                        ({ wbsType, id }) =>
                          ["Rebar"].includes(wbsType) && (
                            <React.Fragment>
                              <Link
                                to={routesURL.WORKPACKAGE_WIKI + id}
                                className="text-capitalize"
                              >
                                {wbsType}
                              </Link>
                              <br />
                            </React.Fragment>
                          )
                      )}
                      <br />
                      <Link to={routesURL.WORKPACKAGE_LIST}>
                        {" "}
                        All Workpackage ...{" "}
                      </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="3">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        Overdue Deliverables :
                      </ListGroupItemHeading>
                      {this.props.deliverablesInfo.map(
                        item =>
                          item.d_status === "Overdue" && (
                            <>
                              <Link
                                to={routesURL.DELIVERABLES_WIKI + item.d_id}
                              >
                                {" "}
                                {item.name}
                              </Link>
                              <br />
                            </>
                          )
                      )}

                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Delivery.Code.02(15-May-2019)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Upcoming Deliverables :
                      </ListGroupItemHeading>
                      {this.props.deliverablesInfo.map(
                        item =>
                          item.d_status === "Upcoming" && (
                            <>
                              <Link
                                to={routesURL.DELIVERABLES_WIKI + item.d_id}
                              >
                                {" "}
                                {item.name}
                              </Link>
                              <br />
                            </>
                          )
                      )}

                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Requirements-1.0 (20-Jun-2019)
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Delivery.Code.02(30-Jun-2019)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Deliverables Not started:{" "}
                      </ListGroupItemHeading>
                      {this.props.deliverablesInfo.map(
                        item =>
                          item.d_status === "Not Started" && (
                            <>
                              <Link
                                to={routesURL.DELIVERABLES_WIKI + item.d_id}
                              >
                                {" "}
                                {item.name}
                              </Link>
                              <br />
                            </>
                          )
                      )}
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Design - 2.0
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Quality Assurance{" "}
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Document.01{" "}
                      </Link>
                      <br />
                      <br />
                      <Link to={routesURL.DELIVERABLES_LIST}>
                        {" "}
                        All Deliverables ...{" "}
                      </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="4">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        {" "}
                        Workpackage Progress :{" "}
                      </ListGroupItemHeading>
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Work Package 01
                      </Link>{" "}
                      <br />
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Work Package 02
                      </Link>{" "}
                      <br />
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        All Progress ...{" "}
                      </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackages;
