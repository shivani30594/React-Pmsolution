import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SubMenu from "../SubMenu/Submenu";
import RecordInformation from "../../components/RecordInformation";
import Attachments from "../../components/Attachments";


import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import WorkPackageInformation from "../../components/WorkPackageWiki/WorkPackageInformation";
import WorkPackageActivities from "../../components/WorkPackageWiki/WorkPackageActivities";
import WorkPackageIssueChanges from "../../components/WorkPackageWiki/WorkPackageIssueChanges";
import WorkPackageDeliverables from "../../components/WorkPackageWiki/WorkPackageDeliverables";

import Meetings from "../../components/ProjectsWiki/Meetings";
import projectwiki_database from "../../database/projectwiki_database";
import workpackagewiki_database from "../../database/workpackagewiki_database";
import _omit from "lodash/omit";

class WorkPackageWiki extends Component {
  sidebar = null;

  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();
  deliverableRef = React.createRef();

  componentDidMount() {
    this.fixSidebar();
  }

  fixSidebar = () => {
    // this.sidebar = new StickySidebar(".sidebar", {
    //   topSpacing: 0,
    //   bottomSpacing: 0,
    //   containerSelector: ".main-content",
    //   innerWrapperSelector: ".sidebar__inner"
    // });
  };
  render() {
    const { id } = this.props.match.params;
    const p = projectwiki_database[0].workPackages.filter(wp => wp.id === id);
    const { activities: a } = { ...p["0"] };
    const activities = a.map(item => _omit(item, ["type"]));
    const workPackageInfo = p[0];
    const record_information = p[0].record_information;
    const { issues, changes, deliverbales } = workpackagewiki_database;
    //console.log("admin", workPackageInfo);
    return (
      <React.Fragment>
        <SubMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            workPackageRef: this.workPackageRef,
            deliverableRef: this.deliverableRef,
            meetingMinutesRef: this.meetingMinutesRef,
            activityLogRef: this.activityLogRef
          }}
          isMenu={{ finanical: false, wbs: false,project:false}}
          name={workPackageInfo.name}
        />
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <div className="col-12" ref={this.workPackageRef}>
                <WorkPackageInformation workPackageInfo={workPackageInfo} />
              </div>
              <Col xs="12">
                <WorkPackageActivities activities={activities} />
              </Col>

              <Col xs="12">
                <Attachments />
              </Col>

              {/* <Col lg="12">
                  <Comments />
                </Col> */}
              <div className="col-12" ref={this.issueChangesRef}>
                <WorkPackageIssueChanges issues={issues} changes={changes} />
              </div>
              <div className="col-12" ref={this.deliverableRef}>
                <WorkPackageDeliverables deliverbales={deliverbales} />
              </div>
              <div className="col-12" ref={this.meetingMinutesRef}>
                {/* <WorkPackageMeeting /> */}
                <Meetings />
              </div>
              <div className="col-12" ref={this.activityLogRef}>
                {/* <ActivityLog title="WorkPackage ActivityLog"  /> */}
                <ActivityLog />
              </div>
            </Row>
          </div>

          <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecordInformation
                  record_information={record_information}
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

export default WorkPackageWiki;
