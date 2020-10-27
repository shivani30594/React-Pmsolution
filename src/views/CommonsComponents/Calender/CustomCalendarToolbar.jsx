import React, {Component} from "react";

class CustomCalendarToolbar extends Component {
  render() {
    return (<div>
      <div className="rbc-toolbar">
        <span>
          <button className="btn btn-sm" onClick={() => this.changeNavidate("PREV")}>
            {" "}
            &#8592;{" "}
          </button>
        </span>{" "}
        &nbsp;
        <span>
          <button className="btn btn-sm" onClick={() => this.changeNavidate("NEXT")}>
            {" "}
            &#8594;{" "}
          </button>
        </span>
        <span className="rbc-toolbar-label ml-auto">{this.props.label}</span>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate("month")}>
            month
          </button>
          <button type="button" onClick={() => this.navigate("week")}>
            week
          </button>
          <button type="button" onClick={() => this.navigate("day")}>
            day
          </button>
        </span>
      </div>
    </div>);
  }
  navigate = action => {
    this.props.onView(action);
  };
  changeNavidate = action => {
    this.props.onNavigate(action);
  };
}

export default CustomCalendarToolbar;
