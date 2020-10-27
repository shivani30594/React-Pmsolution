import React, { Component } from "react";
import SubMenu from "../SubMenu/Submenu";
import BasicInformation from "../../components/ProjectsWiki/BasicInformation";
import RecordInformation from "../../components/RecordInformation";
import Activities from "../../components/ProjectsWiki/Activities";
import Attachments from "../../components/Attachments";
import WorkPackages from "../../components/ProjectsWiki/WorkPackages";
import IssueChanges from "../../components/ProjectsWiki/IssueChanges";
import Meetings from "../../components/ProjectsWiki/Meetings";
import Risks from "../../components/ProjectsWiki/Risks";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import projectwiki_database from "../../database/projectwiki_database";
import deliverableswiki_database from "../../database/deliverableswiki_database";
import issuewiki_database from "../../database/issuewiki_database";
import changewiki_database from "../../database/changewiki_database";
import database from "../../database/database";
import { routesURL } from "../../constant/routesURL";
import BudgetFinance from "../../components/ProjectsWiki/BudgetFinance";

class ProjectWiki extends Component {
  // reference variables
  issueChangesRef = React.createRef();
  projectInfoRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  render() {
    /**
     *  @const {String} id
     *  @const {Array} project
     *  @const {Array} tasks
     *  @const {Array} record_information
     *  @const {Array} deliverablesInfo
     *  @const {Array} issues
     *  @const {Array} changes
     */
    const { id } = this.props.match.params;
    const project = database.projects.filter(item => `${item.id}` === id);
    if (project.length === 0)
    return (window.location.hash = routesURL.DASHBOARD);
    const tasks = projectwiki_database;
    const { record_information } = database;
    const { deliverablesInfo } = deliverableswiki_database;
    const { basicProjectInfo, activity } = project[0].projectwiki;
    const { issues } = issuewiki_database;
    const { changes } = changewiki_database;

    return (
      <React.Fragment>
        {/**
            // SubMenu
            refs : pass reference of components
            isMenu : pass boolen value. default all menus value are true.
            @param {Object} refs
            @param {Object} isMenu
        */}

        <SubMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            projectInfoRef:this.projectInfoRef,
            workPackageRef: this.workPackageRef,
            meetingMinutesRef: this.meetingMinutesRef,
            financialsRef: this.financialsRef,
            activityLogRef: this.activityLogRef
          }}
          isMenu={{           
            deliverable: false,
            work_package: false,
            approved_status: false
          }}
          link={"projectwiki"}
          id={id}
        />
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12" ref={this.projectInfoRef}>
                <BasicInformation
                  projectID={id}
                  basicProjectInfo={basicProjectInfo}
                />
              </div>

              <div className="col-12">
                <Activities activity={activity} />
              </div>

              <div className="col-12">
                <Attachments />
              </div>

              <div className="col-12" ref={this.workPackageRef}>
                <WorkPackages
                  tasks={tasks}
                  deliverablesInfo={deliverablesInfo}
                />
              </div>

              <div className="col-12" ref={this.issueChangesRef}>
                <IssueChanges issues={issues} changes={changes} />
              </div>

              <div className="col-12" ref={this.meetingMinutesRef}>
                <Meetings />
              </div>

              <div className="col-12" ref={this.financialsRef}>
                <BudgetFinance />
              </div>            

              <div className="col-12">
                <Risks />
              </div>

              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </div>
          </div>
          <div className="aside col-12 col-lg-4">
            <div className="aside-inner">
              <RecordInformation record_information={record_information} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectWiki;
