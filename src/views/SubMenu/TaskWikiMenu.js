import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskWikiMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" area-current="page">
                  <i className="fa fa-map-marker" /> Bay Bridge Construction
                  design(P0001)
                </li>
                <li className="nav-head active " area-current="page">
                  <Link exact to="#">
                    Task 1
                  </Link>
                </li>
              </ol>
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/500">
                    <i className="fa fa-edit" /> Edit
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/500">
                    <i className="cui-comment-square" /> Comment
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default TaskWikiMenu;
