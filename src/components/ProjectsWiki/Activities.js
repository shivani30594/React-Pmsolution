import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import ExportExcel from "../../helper/ExportExcel";
import { CSVLink } from "react-csv";

let data = {
  columns: [
    {
      label: "Activity Number",
      field: "activityNumber",
      sort: "asc"
    },
    {
      label: "Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Work Package",
      field: "work_package",
      sort: "asc"
    },
    {
      label: "Owner",
      field: "owner",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "Planned",
      field: "planned",
      sort: "asc"
    },
    {
      label: "Actual",
      field: "actual",
      sort: "asc"
    },
    {
      label: "Remaning",
      field: "remaning",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },

    {
      label: "% Complete",
      field: "per_complete",
      sort: "asc"
    },
    {
      label: "Comments",
      field: "comments",
      sort: "asc"
    }
  ],
  rows: []
};

class Activities extends Component {
  state = {
    dropdownOpen: false,
    data: {}
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  handleExcel = () => {
    return;
  };

  componentDidMount() {
    data.rows = this.props.activity;
    this.setState({ data });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Activities
            <div className="card-header-actions">
              <UncontrolledDropdown tag="i" className="mr-2 cursor-pointer">
                <DropdownToggle tag="i">
                  <i className="fa fa-download card-header-icons text-primary" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Download as </DropdownItem>
                  <DropdownItem onClick={() => <ExportExcel />}>
                    <i className="fa fa-file-excel-o mr-2" />{" "}
                    <ExportExcel data={data} filename="activities.xlsx" />
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file-pdf-o mr-2" /> PDF
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file mr-2" />{" "}
                    <CSVLink
                      filename="activities.csv"
                      separator=" "
                      data={data.rows}
                      className="text-dark text-decoration-none"
                    >
                      CSV
                    </CSVLink>
                  </DropdownItem>
                  <DropdownItem onClick={() => window.print()}>
                    <i className="fa fa-print mr-2" /> Print
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <ReactDataTableNew
              striped
              bordered
              responsive
              data={this.state.data}
              entries={5}
              entriesOptions={[5, 10, 20, 50, 100]}
              isButton={true}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Activities;
