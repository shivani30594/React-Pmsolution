import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ChangeWikiMenu from "../SubMenu/ChangeWikiMenu";
import RecordInformation from "../../components/RecordInformation";
import Attachments from "../../components/Attachments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import ChangeDescription from "../../components/ChangeWiki/ChangeDescription";
import ChangeActivities from "../../components/ChangeWiki/ChangeActivities";
import ChangeApprovalStatus from "../../components/ChangeWiki/ChangeApprovalStatus";
import deliverableswiki_database from "../../database/deliverableswiki_database";
import changewiki_database from "../../database/changewiki_database";
import { routesURL } from "../../constant/routesURL";

class ChangeWiki extends Component {
  attachmentRef = React.createRef();
  approvedStatusRef = React.createRef();
  activityLogRef = React.createRef();

  render() {
    const { id } = this.props.match.params;
    const changes = changewiki_database.changes.filter(
      item => `${item.c_id}` === id
    );
    if (changes.length === 0) {
      return (window.location.hash = routesURL.DASHBOARD);
    }

    const { activities } = deliverableswiki_database;
    const { record_information } = changewiki_database;
    return (
      <React.Fragment>
        <ChangeWikiMenu
          refs={{
            attachmentRef: this.attachmentRef,
            approvedStatusRef: this.approvedStatusRef,
            activityLogRef: this.activityLogRef
          }}
        />
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <Col xs="12">
                <ChangeDescription changes={changes[0]} />
              </Col>
              <Col xs="12">
                <ChangeActivities activities={activities} />
              </Col>
              <div className="col-12" ref={this.attachmentRef}>
                <Attachments />
              </div>
              <div className="col-12" ref={this.approvedStatusRef}>
                <ChangeApprovalStatus />
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

export default ChangeWiki;
