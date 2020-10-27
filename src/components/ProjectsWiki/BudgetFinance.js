/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Financial from "../../components/ProjectsWiki/Financial";
import {
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
  Input
} from "reactstrap";
import database from "../../database/database";
import Modal from "../../helper/Modal";
import { formatDate } from "../../helper/TextFormat";
import { APP_LOCAL_DATETIME_FORMAT } from "../../constant";

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

class BudgetFinance extends Component {
  state = {
    activeTab: "1",
    commentsData: { ...activityData },
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
    activityData.rows.push({
      date: formatDate(new Date(), APP_LOCAL_DATETIME_FORMAT),
      by: "Suresh Padmanabhan",
      comment
    });
    this.setState({
      commentsData: { ...activityData },
      comment: "",
      isModal: false
    });
  };

  componentDidMount() {
    activityData.rows = database.comments;
    activityData.rows = database.activityLog;
    this.setState({
      commentsData: { ...activityData },
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
                  Budget
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
                 Forecast
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
                  Financials
                </a>
              </li>
            </ul>

            <div className="card-header-actions">
              <i className="fa fa-plus-circle text-primary mr-2 cursor-pointer" />
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
              <TabPane tabId="1">Budget</TabPane>

              <TabPane tabId="2">Finance</TabPane>

              <TabPane tabId="3">
                <Financial />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default BudgetFinance;
