import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import eventsList from "./eventsList";
import CustomCalendarToolbar from "./CustomCalendarToolbar";
import moment from "moment";
// import "./Calendar.css";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            Calendar
            <div className="card-header-actions">
              {/* <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a> */}
              <a href="/#/500" download>
                <i
                  className="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i className="fa fa-ellipsis-h card-header-icons" />
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" sm="12" lg="12">
                <div
                  style={{
                    height: 450
                  }}
                >
                  <BigCalendar
                    localizer={BigCalendar.momentLocalizer(moment)}
                    events={eventsList}
                    popup={true}
                    step={30}
                    components={{
                      toolbar: CustomCalendarToolbar
                    }}
                    views={["month", "week", "day"]}
                    rtl={true}
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Calendar;
