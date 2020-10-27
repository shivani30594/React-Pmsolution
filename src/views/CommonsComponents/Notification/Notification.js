import React, { Component } from "react";
import { CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../../../components/ReactDataTableNew";
import database from "../../../database/database";

let data = {
  columns: [
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "Title",
      field: "title",
      sort: "asc"
    },
    {
      label: "Project",
      field: "project",
      sort: "asc"
    }
  ],
  rows: []
};

class title extends Component {
  state = {
    data: {}
  };

  componentWillMount() {
    this.updateData();
  }

  handleClick = f => {
    window.location.hash = "/500";
  };

  updateData() {
    if (!["dashboard"].includes(window.location.hash.split("/")["1"])) {
      console.log(this.props);
      data.rows = [];
      const projectdata = database.projects.filter(
        ({ id }) => `${id}` === this.props.id
      );
      if (projectdata.length > 0) {
        projectdata.forEach(({ name: project, notification }) => {
          notification.forEach(({ due_date, title }) => {
            data.rows.push({
              due_date,
              title,
              project,
              clickEvent: f => this.handleClick(f)
            });
          });
        });
      }
    } else {
      data.rows = [];
      database.projects.forEach(project => {
        project.notification.forEach(item => {
          data.rows.push({
            due_date: item.due_date,
            title: item.title,
            project: project.name,
            clickEvent: f => this.handleClick(f)
          });
        });
      });
    }
    this.setState({ data });
  }

  render() {
    return (
      <div className="card">
        <CardHeader>
          Notification
          <div className="card-header-actions" />
        </CardHeader>
        <CardBody>
          <ReactDataTableNew data={this.state.data} />
        </CardBody>
      </div>
    );
  }
}

export default title;
