/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Card, CardHeader, CardBody, TabContent, TabPane } from "reactstrap";

import ReactDataTableNew from "../ReactDataTableNew";

let issueData = {
  columns: [
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "WorkPackage Number",
      field: "workPackageNumber",
      sort: "asc"
    },

    {
      label: "Issue Number",
      field: "issueNumber",
      sort: "asc"
    },
    {
      label: "Description",
      field: "description",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "dueDate",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "completed",
      sort: "asc"
    }
  ],
  rows: []
};

let changesData = {
  columns: [
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "WorkPackage Number",
      field: "workPackageNumber",
      sort: "asc"
    },

    {
      label: "Change Number",
      field: "changeNumber",
      sort: "asc"
    },
    {
      label: "Description",
      field: "description",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "dueDate",
      sort: "asc"
    },
    {
      label: "Value",
      field: "value",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "completed",
      sort: "asc"
    }
  ],
  rows: []
};

class WorkPackageIssueChanges extends Component {
  state = {
    activeTab: "1",
    issueData: { ...issueData },
    changesData: { ...changesData }
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  componentDidMount() {
    issueData.rows = this.props.issues;
    changesData.rows = this.props.changes;
    this.setState({
      issueData: { ...issueData },
      changesData: { ...changesData }
    });
  }
  render() {
    const { activeTab } = this.state;
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
                  Issues
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
                  Changes
                </a>
              </li>
            </ul>

            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                <ReactDataTableNew data={this.state.issueData} />
              </TabPane>
              <TabPane tabId="2">
                <ReactDataTableNew data={this.state.changesData} />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageIssueChanges;
