import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class DeliverablesWikiMenu extends Component {
  scrollTo = ({ current: ref }) => {
    let scrollRef = ReactDOM.findDOMNode(ref);
    let scrollOptions = {
      left: 0,
      top: scrollRef.offsetTop,
      behavior: "smooth"
    };
    document.querySelector(".app-body").scrollTo(scrollOptions);
  };
  render() {
    const { refs,name} = this.props;
    return (
      <React.Fragment>
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" area-current="page">
                  <i className="fa fa-map-marker" /> <Link to="/projectwiki/60453005"> Extensions N/Cape Mall Phase 3 (60453005)</Link>:{name}
                </li>
              </ol>
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link
                    exact
                    to="#"
                    onClick={() => this.scrollTo(refs.activityLogRef)}
                  >
                    <i className="cui-comment-square" /> Comment
                  </Link>
                </li>

                <li className="nav-head active " aria-current="page">
                  <Link exact to="#">
                    <i className="fa fa-user-secret" /> Assign
                  </Link>
                </li>

                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={() => this.scrollTo(refs.approvedStatus)}
                    >
                      <i className="fa fa-check-square" /> Approval Status
                    </Link>
                  </li>

                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={() => this.scrollTo(refs.activityLogRef)}
                    >
                      <i className="fa fa-clipboard" /> Activity Log
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                    >
                      <i className="fa fa-sitemap" /> Submit
                    </Link>
                  </li>

                <li className="nav-head active " aria-current="page">
                  <Link exact to="#">
                    <i className="fa fa-rss" /> Follow
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

export default DeliverablesWikiMenu;
