import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class IssueWikiMenu extends Component {
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
    const { refs } = this.props;
    return (
      <React.Fragment>
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" area-current="page">
                  <i className="fa fa-map-marker" /> Extensions N/Cape Mall
                  Phase 3 (60453005)
                </li>
              
              </ol>
              <ol className="breadcrumb left-breadcrumb">
                {/* <li className="nav-head active" aria-current="page">
                    <Link exact to="/500">
                      <i className="fa fa-edit" /> Edit
                    </Link>
                  </li> */}
                <li className="nav-head active" aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.activityLogRef)}
                  >
                    <i className="cui-comment-square" /> Comment
                  </Link>
                </li>
                <li />
                <li className="nav-head active " aria-current="page">
                  <Link
                    exact
                    to="#"
                    onClick={() => this.scrollTo(refs.approvedStatusRef)}
                  >
                    <i className="fa fa-check-square" /> Approved Status
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.attachmentRef)}
                  >
                    <i className="fa fa-cloud-upload" /> Attachments
                  </Link>
                </li>

                <li className="nav-head active " aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.activityLogRef)}
                  >
                    <i className="fa fa-clipboard" /> Activity Log
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact to="/500">
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

export default IssueWikiMenu;
