/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SubMenu from "../SubMenu/Submenu";
import RecordInformation from "../../components/RecordInformation";
import Attachments from "../../components/Attachments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import MeetingInformation from "../../components/Meeting/MeetingInformation";
import MeetingDescription from "../../components/Meeting/MeetingDescription";
import meeting_database from "../../database/database";

export const menulink = [
  {
    meeting_register: ["Meeting Register", "PROJECT_WIKI", "fa fa-check-square"]
  },
  { submit: ["Submit/Cancel", "500", "fa fa-sitemap"] }
];

class Meeting extends Component {
  sidebar = null;
  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  render() {
    const { record_information } = meeting_database;
    return (
      <React.Fragment>
        <SubMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            workPackageRef: this.workPackageRef,
            meetingMinutesRef: this.meetingMinutesRef,
            activityLogRef: this.activityLogRef
          }}
          isMenu={{
            project:false,
            finanical: false,          
            wbs: false,
            issue_changes: false,
            deliverable: false,
            work_package: false,         
          }}
          link={"meeting"}
          //  name={workPackageInfo.name}
        />

        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <div className="col-12" ref={this.meetingMinutesRef}>
                <MeetingInformation />
              </div>
              <div className="col-12">
                <MeetingDescription />
              </div>

              <Col xs="12">
                <Attachments />
              </Col>

              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </Row>
          </div>
          <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecordInformation
                  record_information={record_information}
                  isScheduleinfo={false}
                  isWorkflowinfo={false}
                />
              </div>
            </div>
          </div>
        </div>

        <Row />
      </React.Fragment>
    );
  }
}

export default Meeting;
