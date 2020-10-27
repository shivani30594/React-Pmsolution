import React, { Component } from "react";
import Menu from "../SubMenu/Menu";
import { Row, Col } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import Notification from "../CommonsComponents/Notification/Notification";
import Summary from "../CommonsComponents/Summary/Summary";
import Risks from "../CommonsComponents/RiskGraph/Risks";
import IssueRegister from "../CommonsComponents/IssueRegister/IssueRegister";
import ChangeRegister from "../CommonsComponents/ChangeRegister/ChangeRegister";
import Calendar from "../CommonsComponents/Calender/Calendar";
import ActivityRegister from "../CommonsComponents/ActivityRegister/ActivityRegister";
import Deliverables from "../CommonsComponents/Deliverables/Deliverables";
import FinancialAnalysis from "../CommonsComponents/EffortAnalysis/FinancialAnalysis";
import FinancialStatus from "../CommonsComponents/FinancialStatus/FinancialStatus";
import OverallStatus from "../CommonsComponents/PSROverallStatus/OverallStatus";
import database from "../../database/database";
import { routesURL } from "../../constant/routesURL";

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  title: {
    position: "bottom"
  },
  legend: {
    display: false
  },
  maintainAspectRatio: false
};

class ProjectStatusReport extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    const { id } = this.props.match.params;
    const project = database.projects.filter(project => `${project.id}` === id);
    if (project.length === 0) {
      return (window.location.hash = routesURL.DASHBOARD);
    }
    const {
      tiles,
      financialStatus,
      financial_per_complete,
      execution_per_complete,
      changeRegisterGraph,
      riskRegister,
      activityRegister,
      issueRegister,
      deliverablesRegister,
      financialAnalysis
    } = project[0];
    console.log(project);

    return (
      <React.Fragment>
        <Menu id={id} />
        <div className="animated fadeIn dashboard-container">
          <Row>
            <Col xs="12" sm="12" lg="12" />
          </Row>
          {/* MyProject and Financial status  */}
          <Row>
            <Col xs="12" sm="12" lg="6">
              <OverallStatus
                financial_per_complete={financial_per_complete}
                execution_per_complete={execution_per_complete}
              />
            </Col>
            <Col xs="12" sm="12" lg="6">
              <Notification id={id} />
            </Col>
          </Row>
          <Row>
            <Summary id={id} tiles={tiles} />
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="6">
              <Risks riskRegister={riskRegister} />
            </Col>
            <Col xs="12" sm="12" lg="6">
              <IssueRegister options={options} issueRegister={issueRegister} />
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="12" lg="6">
              <ChangeRegister
                options={options}
                changeRegisterGraph={changeRegisterGraph}
              />
            </Col>
            <Col xs="12" sm="12" lg="6">
              <Calendar />
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="12" lg="6">
              <ActivityRegister
                options={options}
                activityRegister={activityRegister}
              />
            </Col>
            <Col xs="12" sm="12" lg="6">
              <Deliverables
                options={options}
                deliverablesRegister={deliverablesRegister}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="6">
              <FinancialAnalysis financialAnalysis={financialAnalysis} />
            </Col>
            <Col xs="12" sm="12" lg="6">
              <FinancialStatus financialStatus={financialStatus} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectStatusReport;
