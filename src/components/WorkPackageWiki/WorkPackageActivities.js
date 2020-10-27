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
import ReactDataTableNew from "../ReactDataTableNew";
import { CSVLink } from "react-csv";
import ExportExcel from "../../helper/ExportExcel";

let workPackageActivitiesData = {
  columns: [
    {
      label: "Number",
      field: "wbsNumber",
      sort: "asc"
    },
    {
      label: "Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Duration",
      field: "duration",
      sort: "asc"
    },
    {
      label: "Start Date",
      field: "start_date",
      sort: "asc"
    },
    {
      label: "End Date",
      field: "end_date",
      sort: "asc"
    },
    {
      label: "Resources",
      field: "resources",
      sort: "asc"
    },
    {
      label: "Estimate Hours",
      field: "estimatehours",
      sort: "asc"
    },
    {
      label: "Actual Hours",
      field: "actualhours",
      sort: "asc"
    },
    {
      label: "Remaining Hours",
      field: "remaininghours",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "complete",
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

class WorkPackageActivities extends Component {
  state = {
    data: { ...workPackageActivitiesData }
  };
  componentDidMount() {
    workPackageActivitiesData.rows = this.props.activities;
    this.setState({ data: { ...workPackageActivitiesData } });
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
                      filename="Workpackage_activities.xlsx"
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

export default WorkPackageActivities;
