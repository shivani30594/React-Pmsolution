import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import InvoiceDescription from "../../components/InvoiceWiki/InvoiceDescription";
import InvoiceActivities from "../../components/InvoiceWiki/InvoiceActivities";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import Attachments from "../../components/Attachments";
import RecordInformation from "../../components/RecordInformation";
import ChangeWikiMenu from "../SubMenu/ChangeWikiMenu";
import changewiki_database from "../../database/changewiki_database";
import deliverableswiki_database from "../../database/deliverableswiki_database";

class InvoiceWiki extends Component {
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
                <InvoiceDescription />
              </Col>
              <Col xs="12">
                <InvoiceActivities activities={activities} />
              </Col>
              <div className="col-12" ref={this.attachmentRef}>
                <Attachments />
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

export default InvoiceWiki;
