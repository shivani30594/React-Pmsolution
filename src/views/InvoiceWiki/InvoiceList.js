import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import InvoiceFinancialTableList from "../../components/InvoiceWiki/InvoiceFinancialTableList";
import InvoiceARTableList from "../../components/InvoiceWiki/InvoiceARTableList";
import InvoiceGraph from "../../components/InvoiceWiki/InvoiceGraph";
import InvoiceTablesList from "../../components/InvoiceWiki/InvoiceTablesList";
import getInvoiceList from "../../database/invoicelist_database";

class InvoiceList extends Component {
  render() {
    const { invoiceList } = getInvoiceList();
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectwiki">
                          <i className="fa fa-map-marker" /> Extensions N/Cape
                          Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col lg="12" xl="6">
              <Row>
                <Col sm="12" md="6" lg="6">
                  <Card>
                    <CardHeader>Financial Summary</CardHeader>
                    <CardBody>
                      <InvoiceFinancialTableList />
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12" md="6" lg="6">
                  <Card>
                    <CardHeader>AR</CardHeader>
                    <CardBody>
                      <InvoiceARTableList />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="12" xl="6">
              <Card>
                <CardBody>
                  <InvoiceGraph />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <div className="card-header-actions">
                    <i className="fa fa-file-excel-o mr-2" />
                    <i className="fa fa-plus-circle mr-2" />
                    <i className="fa fa-pencil-square" />
                  </div>
                </CardHeader>
                <CardBody>
                  <InvoiceTablesList invoiceList={invoiceList} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default InvoiceList;
