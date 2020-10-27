import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import Modal from "../../helper/Modal";
import ReactDataTableNew from "../ReactDataTableNew";
import DeliverablesListForm from "./DeliverablesListForm";

let deliveriablesListData = {
  columns: [
    {
      label: "Deliverable Number",
      field: "number",
      sort: "asc"
    },
    {
      label: "Deliverable Name",
      field: "deliverable_name",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "Completed",
      field: "completed",
      sort: "asc"
    },

    {
      label: "Status",
      field: "status",
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
      label: "Value",
      field: "value",
      sort: "asc"
    },
    {
      label: "Owner",
      field: "owner",
      sort: "asc"
    },
    {
      label: "Severity",
      field: "severity",
      sort: "asc"
    },
    {
      label: "Type",
      field: "type",
      sort: "asc"
    },
    {
      label: "Description",
      field: "description",
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

class DeliverablesTableList extends Component {
  state = {
    data: { ...deliveriablesListData }
  };
  handleClick = () => {
    console.log("Click");
  };
  componentDidMount() {
    deliveriablesListData.rows = this.props.deliverablesList;
    this.setState({ data: { ...deliveriablesListData } });
  }
  handleSubmit = values => {
    deliveriablesListData.rows.push(values);
    this.setState({ data: { ...deliveriablesListData } });
    this.props.toggle();
  };
  render() {
    const deliverablesBody = (
      <DeliverablesListForm
        toggle={this.props.toggle}
        handleSubmit={this.handleSubmit}
      />
    );
    return (
      <React.Fragment>
        <Modal
          isOpen={this.props.isModal}
          toggle={this.props.toggle}
          header={"Add New Deliverable"}
          body={deliverablesBody}
          size="xl"
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

export default DeliverablesTableList;
