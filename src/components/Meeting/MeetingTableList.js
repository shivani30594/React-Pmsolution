import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let meetingListData = {
  columns: [
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "Meeting Title",
      field: "meeting_title",
      sort: "asc"
    },
    {
      label: "Attendees",
      field: "attendees",
      sort: "asc"
    },
    {
      label: "Document",
      field: "document",
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
class MeetingTableList extends Component {
  state = {
    data: { ...meetingListData }
  };
  componentDidMount() {
    meetingListData.rows = this.props.meetingList;
    this.setState({ data: { ...meetingListData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-save" />
            </div>
          </CardHeader>
          <CardBody>
            {/* <Table responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Meeting Title</th>
                  <th>Attendees</th>
                  <th>Document</th>
                  <th>Pubic</th>
                </tr>
              </thead>
              <tbody>
                <MeetingTableListItems />
                <MeetingTableListItems />
                <MeetingTableListItems />
              </tbody>
            </Table> */}
            <ReactDataTableNew data={this.state.data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default MeetingTableList;
