import React, { Component } from "react";
import DatePicker from "react-datepicker";

class MeetingInformation extends Component {
  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <form>
        <div className="card">
          <div className="card-header">
            Meeting Information
            {/* <div className="card-header-actions">
              <i className="fa fa-times-circle-o mr-2" />
              <i className="fa fa-save" />
            </div> */}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group row">
                  <label for="template" className="col col-form-label">
                    Template :
                  </label>
                  <div className="col">

                    <select name="template" className="form-control">                     
                      <option>Professional</option>
                      <option>Detailed</option>
                      <option>Simple</option>
                    </select>

                  </div>
                </div>
                <div className="form-group row">
                  <label for="frequency" className="col col-form-label">
                    Frequency :
                  </label>
                  <div className="col">
                    <select name="frequency" className="form-control">                   
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="date" className="col col-form-label">
                    Date :
                  </label>
                  <div className="col">
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      className="form-control"
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      todayButton={"Today"}
                      dateFormat="MM-dd-yyyy"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="date" className="col col-form-label">
                    Strat on :
                  </label>
                  <div className="col">
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      className="form-control"
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      todayButton={"Today"}
                      dateFormat="MM-dd-yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group row">
                  <label for="recurring" className="col col-form-label">
                    Recurring :
                  </label>
                  <div className="col">
                    <select name="recurring" className="form-control">                   
                    <option>Y</option>
                    <option>N</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="endsOn" className="col col-form-label">
                    Ends on :
                  </label>
                  <div className="col">
                  <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      className="form-control"
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      todayButton={"Today"}
                      dateFormat="MM-dd-yyyy"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="location" className="col col-form-label">
                    Location :
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="date" className="col col-form-label">
                    Duration :
                  </label>
                  <div className="col">
                  <input
                      type="text"
                      className="form-control"
                      name="duration"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group row">
                  <label for="subject" className="col col-form-label">
                    Subject :
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group row">
                  <label for="attendee" className="col col-form-label">
                    Attendee :
                  </label>
                  <div className="col">
                    <textarea className="form-control" name="attendee" />
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="form-group row">
                  <div className="btn btn-danger ml-auto">Cancel</div>
                  <div className="btn btn-primary mr-auto">Save</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default MeetingInformation;
