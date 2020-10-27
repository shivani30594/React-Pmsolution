/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import IssueWikiMenu from "../SubMenu/IssueWikiMenu";
import SubMenu from "../SubMenu/Submenu";
import IssueDescription from "../../components/IssueWiki/IssueDescription";
import RecordInformation from "../../components/RecordInformation";
import IssueActivities from "../../components/IssueWiki/IssueActivities";
import Attachments from "../../components/Attachments";
import IssueApprovalStatus from "../../components/IssueWiki/IssueApprovalStatus";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import deliverableswiki_database from "../../database/deliverableswiki_database";
import issuewiki_database from "../../database/issuewiki_database";
import { routesURL } from "../../constant/routesURL";

class IssueWiki extends Component {
  attachmentRef = React.createRef();
  approvedStatusRef = React.createRef();
  activityLogRef = React.createRef();

  render() {
    const { id } = this.props.match.params;
    const issue = issuewiki_database.issues.filter(
      item => `${item.i_id}` === id
    );
    if (issue.length === 0) {
      return (window.location.hash = routesURL.DASHBOARD);
    }
    const { activities } = deliverableswiki_database;
    const { issueDescription, record_information } = issuewiki_database;

    return (
      <React.Fragment>
        <IssueWikiMenu
          refs={{
            attachmentRef: this.attachmentRef,
            approvedStatusRef: this.approvedStatusRef,
            activityLogRef: this.activityLogRef
          }}
        />
        {/* <SubMenu/> */}

        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <Col xs="12">
                <IssueDescription
                  issue={issue[0]}
                  issueDescription={issueDescription}
                />
              </Col>
              <Col xs="12">
                <IssueActivities activities={activities} />
              </Col>
              <div className="col-12" ref={this.attachmentRef}>
                <Attachments />
              </div>
              <div className="col-12" ref={this.approvedStatusRef}>
                <IssueApprovalStatus />
              </div>
              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </Row>
          </div>
          <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecordInformation
                  isScheduleinfo={false}
                  isWorkflowinfo={false}
                  record_information={record_information}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IssueWiki;
