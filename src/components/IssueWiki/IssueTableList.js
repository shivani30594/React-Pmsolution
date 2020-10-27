import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";
import Modal from "../../helper/Modal";
//import IssueListForm from "./IssueListForm";

const issueListData = {
  columns: [
    {
      label: "Issue Number",
      field: "number",
      sort: "asc"
    },
    {
      label: "Issue Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Title",
      field: "title",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "complete",
      sort: "asc"
    },
    {
      label: "Status",
      field: "issue_status",
      sort: "asc"
    },
    {
      label: "Workpackage",
      field: "workpackage",
      sort: "asc"
    },
    {
      label: "Planned Effort",
      field: "planned_effort",
      sort: "asc"
    },
    {
      label: "Actual Effort",
      field: "actual_effort",
      sort: "asc"
    },
    {
      label: "Assignee",
      field: "owner",
      sort: "asc"
    },
    {
      label: "Issue Type",
      field: "issue_type",
      sort: "asc"
    },
    {
      label: "Issue Severity",
      field: "issue_severity",
      sort: "asc"
    },
    {
      label: "Description",
      field: "per_complete",
      sort: "asc"
    },
    {
      label: "Public",
      field: "public",
      sort: "asc"
    }
  ],
  rows: []
};

class IssueTableList extends Component {
  state = {
    data: { ...issueListData }
  };
  componentDidMount() {
    issueListData.rows = this.props.issueList;
    this.setState({ data: { ...issueListData } });
  }
  handleSubmit = values => {
    issueListData.rows.push(values);
    this.setState({ data: { ...issueListData } });
    this.props.toggle();
  };
  render() {
    const modalBody = (
      <div/>
      // <IssueListForm
      //   handleSubmit={this.handleSubmit}
      //   toggle={this.props.toggle}
      // />
    );
    return (
      <React.Fragment>
        <Modal
          header={"Add New Issues"}
          isOpen={this.props.isModal}
          toggle={this.props.toggle}
          size="xl"
          body={modalBody}
        />
        <Card>
          <CardBody>
            <ReactDataTableNew
              data={this.state.data}
              entries={10}
              entriesOptions={[10, 20, 50, 100]}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default IssueTableList;
