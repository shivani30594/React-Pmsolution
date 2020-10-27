import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DeliverablesTableList from "../../components/DeliverablesWiki/DeliverablesTableList";
import getDeliverableswiki from "../../database/deliverableswiki_database1";

class DeliverablesList extends Component {
  state = {
    isModal: false
  };
  deliverablesWiki = getDeliverableswiki({
    handleChange: this.handleChange
  });
  toggle = () => {
    this.setState({ isModal: !this.state.isModal });
  };
  render() {
    const { deliverablesList: list1 } = this.deliverablesWiki;
    const newDeliverablesList = list1.map(item => {
      const { d_id, d_status, ...rest } = item;
      return { ...rest };
    });
    // const { deliverablesList: list2 } = deliverableswiki_database;
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectwiki/60453005">
                          <i className="fa fa-map-marker" />  Extensions N/Cape Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="#" onClick={this.toggle}>
                          <i className="fa fa-plus-square" /> Create New
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <DeliverablesTableList
                toggle={this.toggle}
                isModal={this.state.isModal}
                deliverablesList={newDeliverablesList}
              />
            </Col>
            {/* <Col sm="12" md="12" lg="12">
              <DeliverablesTableList deliverablesList={list2} />
            </Col> */}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliverablesList;
