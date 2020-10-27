import React, { Component } from 'react'
import {Col,Row} from 'reactstrap'
import ChangeWikiMenu from "../SubMenu/ChangeWikiMenu";
import RiskDescription from '../../components/RisksWiki/RiskDescription'
import RiskActivities from '../../components/RisksWiki/RiskActivities'
import RiskApprovalStatus from '../../components/RisksWiki/RiskApprovalStatus'
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import Attachments from "../../components/Attachments";
import RecordInformation from "../../components/RecordInformation";
import changewiki_database from "../../database/changewiki_database";
import deliverableswiki_database from "../../database/deliverableswiki_database";

class RiskWiki extends Component {
    attachmentRef = React.createRef();
    approvedStatusRef = React.createRef();
    activityLogRef = React.createRef();
    render() {
        const { record_information } = changewiki_database;
        const { activities } = deliverableswiki_database;
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
                <RiskDescription />
              </Col>
              <Col xs="12">
                <RiskActivities activities={activities} />
              </Col>
              <div className="col-12" ref={this.attachmentRef}>
                <Attachments />
              </div>
              <div className="col-12">
                <RiskApprovalStatus />
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
        )
    }
}

export default RiskWiki
