import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ExportExcel from "../../helper/ExportExcel";
import { CSVLink } from "react-csv";
import ReactDataTableNew from "../ReactDataTableNew";

let activityData = {
  columns: [
    {
      label: "Description",
      field: "description",
      sort: "asc"
    },
    {
      label: "Assigned To",
      field: "assigned_to",
      sort: "asc"
    },
    {
      label: "Start Date",
      field: "start_date",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "due_date",
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
    }
  ],
  rows: []
};
class InvoiceActivities extends Component {
  state = {
    dropdownOpen: false,
    data: { ...activityData }
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  componentDidMount() {
    activityData.rows = this.props.activities;
    this.setState({ data: { ...activityData } });
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
                    <ExportExcel
                      data={this.state.data}
                      filename="Deliverables_activities.xlsx"
                    />
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file-pdf-o mr-2" /> PDF
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file mr-2" />{" "}
                    <CSVLink
                      filename="activities.csv"
                      separator=" "
                      data={this.state.data.rows}
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
            <ReactDataTableNew data={this.state.data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default InvoiceActivities;
