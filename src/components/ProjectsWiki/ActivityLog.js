/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
  Input,
  Button
} from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";
import database from "../../database/database";
import Modal from "../../helper/Modal";
import { formatDate } from "../../helper/TextFormat";
import { APP_LOCAL_DATETIME_FORMAT } from "../../constant";

let commentData = {
  columns: [
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "By",
      field: "by",
      sort: "asc"
    },
    {
      label: "Comment",
      field: "comment",
      sort: "asc"
    }
  ],
  rows: []
};

let activityData = {
  columns: [
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "By",
      field: "by",
      sort: "asc"
    },
    {
      label: "Comment",
      field: "comment",
      sort: "asc"
    }
  ],
  rows: []
};

export class ActivityLog extends Component {
  state = {
    activeTab: "1",
    commentsData: { ...commentData },
    activityLogData: { ...activityData },
    isModal: false,
    comment: ""
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  toggleModal = () => this.setState({ isModal: !this.state.isModal });

  handleChangeComment = ({ target }) =>
    this.setState({ [target.name]: target.value });

  addComment = () => {
    const { comment } = this.state;
    commentData.rows.push({
      date: formatDate(new Date(), APP_LOCAL_DATETIME_FORMAT),
      by: "Suresh Padmanabhan",
      comment
    });
    this.setState({
      commentsData: { ...commentData },
      comment: "",
      isModal: false
    });
  };

  componentDidMount() {
    commentData.rows = database.comments;
    activityData.rows = database.activityLog;
    this.setState({
      commentsData: { ...commentData },
      activityLogData: { ...activityData }
    });
  }

  render() {
    const { activeTab } = this.state;
    console.log("Comment data", database.comments);
    const addCommentBody = (
      <React.Fragment>
        <Input
          type="textarea"
          rows="2"
          name="comment"
          placeholder="Enter Comment"
          value={this.state.comment}
          onChange={this.handleChangeComment}
        />
        <div className="mt-3">
          <Button
            onClick={this.addComment}
            color="success"
            size="sm"
            className="mr-2 float-right"
          >
            Add
          </Button>
          <Button
            onClick={this.toggleModal}
            color="danger"
            size="sm"
            className="m-0"
          >
            Close
          </Button>
        </div>
      </React.Fragment>
    );

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
                  {" "}
                  Comments
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
                  Activity Log
                </a>
              </li>
            </ul>

            <div className="card-header-actions">
              <i
                className="fa fa-plus-circle text-primary mr-2 cursor-pointer"
                onClick={this.toggleModal}
              />
              <i className="fa fa-pencil-square" />
            </div>
            <Modal
              isOpen={this.state.isModal}
              toggle={this.toggleModal}
              header="Add Comment"
              body={addCommentBody}
            />
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                {/* <ReactDataTableNew
                  data={this.state.commentsData}
                  paging={false}
                  searching={false}
                /> */}
                {database.comments.map((data, index) => (
                  <div className="message" key={index}>
                    <div className=" mr-3 float-left">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/7.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-success" />
                      </div>
                    </div>
                    <div>
                      <small className="text-muted">{data.by}</small>
                      <small className="text-muted float-right mt-1">
                        {data.date}
                      </small>
                    </div>
                    <div className="text-truncate font-weight-bold text-muted">
                      {data.comment}
                    </div>
                    {/* <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt...
                  </small> */}
                    <hr />
                  </div>
                ))}
              </TabPane>

              <TabPane tabId="2">
                <ReactDataTableNew
                  data={this.state.activityLogData}
                  paging={false}
                  searching={false}
                />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ActivityLog;
