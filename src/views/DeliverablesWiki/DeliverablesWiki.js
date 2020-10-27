/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import DeliverablesWikiMenu from "../SubMenu/DeliverablesWikiMenu";
import SubMenu from "../SubMenu/Submenu";
import RecordInformation from "../../components/RecordInformation";
import Attachments from "../../components/Attachments";
import DeliverablesInformation from "../../components/DeliverablesWiki/DeliverablesInformation";
import DeliverablesActivities from "../../components/DeliverablesWiki/DeliverablesActivities";
import DeliverablesApprovalStatus from "../../components/DeliverablesWiki/DeliverablesApprovalStatus";
import deliverableswiki_database from "../../database/deliverableswiki_database";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";

class DeliverablesWiki extends Component {
  approvedStatus = React.createRef();
  activityLogRef = React.createRef();
  deliverableRef = React.createRef();

  render() {
    const { id } = this.props.match.params;
    const { activities, deliverablesInfo } = deliverableswiki_database;
    const deliverInfo = deliverablesInfo.filter(item => item.d_id === id);
    if (deliverInfo.length === 0) {
      window.location.hash = "#/";
    }
    console.log(deliverInfo[0]);
    return (
      <React.Fragment>
        {/* <SubMenu
          refs={{
            approvedStatus: this.approvedStatus,
            activityLogRef: this.activityLogRef
          }}
          isMenu={{ finanical: false,wbs:false,issue_changes:false,work_package:false}}
        /> */}
         <SubMenu
          refs={{    
            approvedStatus: this.approvedStatus,           
            deliverableRef: this.deliverableRef,       
            activityLogRef: this.activityLogRef
          }}
         //temp={{approvedStatus: this.approvedStatus}  }
          isMenu={{
            project:false,
            meeting_minutes:false,  
            finanical: false,          
            wbs: false,
            issue_changes: false,           
            work_package: false,   
               
          }}
          name={deliverInfo[0].name}
          link={"deliverable"}
          //  name={workPackageInfo.name}
        />
        {/* <DeliverablesWikiMenu
          refs={{
            approvedStatus: this.approvedStatus,
            activityLogRef: this.activityLogRef
          }}
          name={deliverInfo[0].name}
        /> */}
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <div className="col-12" ref={this.deliverableRef} >
                <DeliverablesInformation deliverInfo={deliverInfo[0]} />
              </div>
              <Col xs="12">
                <DeliverablesActivities activities={activities} />
              </Col>

              <Col xs="12">
                <Attachments />
              </Col>
              <div className="col-12" ref={this.approvedStatus}>
                <DeliverablesApprovalStatus />
              </div>
              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </Row>
          </div>
          <div className="aside col-12 col-lg-4">
            <div className="aside-inner">
              <RecordInformation
                record_information={deliverInfo[0].record_information}
                isScheduleinfo={false}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliverablesWiki;
