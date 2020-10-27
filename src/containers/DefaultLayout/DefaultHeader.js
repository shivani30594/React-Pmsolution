/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";
import Profile from "./ProfileAside";
import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand
} from "@coreui/react";
import logo from "../../assets/img/brand/Synergasia.png";
import sygnet from "../../assets/img/brand/sygnet.svg";
import Popup from "./Popup";
import { routesURL } from "../../constant/routesURL";
import _history from "../../utils/history";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  state = {
    startDate: new Date()
  };
  signOut(e) {
    e.preventDefault();
    //this.props.history.push("/login");
    window.location.hash = "/login";
  }
  handleChange = date => {
    this.setState({ startDate: date });
    this.toggleCalendar();
  };
  toggleCalendar = e => {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        {/* <AppAsideToggler className="d-lg-none" display="md" mobile /> */}
        <AppNavbarBrand
          full={{ src: logo,  height: 30, alt: "ANS Corp" }}
          minimized={{ src: sygnet,  height: 30, alt: "ANS Corp" }}
        />

        <p className="project-name">ANS Corp - {this.props.title} </p>

        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> Project Dashboard*/}

        <Nav className="d-md-down-none" navbar />
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            {/* <NavLink tag={Link} to="/projectwiki" className="nav-link"> */}
            <Popup />
            {/* </NavLink> */}
          </NavItem>
          <div className="topnav">
            <div className="search-container">
              <form action="/action_page.php" method="post">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to={routesURL.DASHBOARD} className="nav-link">
              <i className="fa fa-home" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <AppHeaderDropdown
            direction="down"
            className="d-md-down-none"
            style={{ margin: "0 8px" }}
          >
            <DropdownToggle nav>
              <i
                className="fa fa-star-o"
                aria-hidden="true"
                style={{ fontSize: "23px", verticalAlign: "center" }}
              />
            </DropdownToggle>
            <DropdownMenu right style={{ right: "auto" }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Most Recent</strong>
              </DropdownItem>
              {/* {_history
                .getHistory()
                .reverse()
                .map(hash => {
                  const title = _history._routes[`${hash.split("/")["0"]}`];
                  return (
                    title && (
                      <DropdownItem key={hash}>
                        <NavLink
                          tag={Link}
                          to={`/${hash}`}
                          className="nav-link"
                        >
                          {title}
                        </NavLink>
                      </DropdownItem>
                    )
                  );
                })} */}
              <DropdownItem>
                <NavLink tag={Link} to={"/500"} className="nav-link">
                  Project 1
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={Link} to={"/500"} className="nav-link">
                  Project 5
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={Link} to={"/500"} className="nav-link">
                  Project 3
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
          <NavItem className="d-md-down-none">
            <NavLink
              tag={Link}
              to={"#"}
              className="nav-link"
              onClick={() => this.props.toggleCalendar()}
            >
              {this.props.isCalendar ? (
                <AppAsideToggler
                  defaultOpen={true}
                  className="fa fa-calendar"
                  display="lg"
                />
              ) : (
                <i className="fa fa-calendar" aria-hidden="true" />
              )}

              {/* onClick={this.toggleCalendar} */}
              {/* {this.state.isOpen && (
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  inline
                  showYearDropdown
                  showMonthDropdown
                  useShortMonthInDropdown
                  todayButton={"Today"}
                />
              )} */}
              {/* <AppAsideToggler className="fa fa-calendar"  /> */}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink
              tag={Link}
              to={"#"}
              className="nav-link"
              onClick={() => this.props.toggleNewsFeed()}
            >
              {this.props.isNewsFeed ? (
                <AppAsideToggler
                  defaultOpen={true}
                  className="fa fa-pencil-square-o"
                  display="lg"
                />
              ) : (
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
              )}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none comments-boxs">
            <NavLink
              tag={Link}
              to="#"
              className="nav-link"
              onClick={() => this.props.toggleChat()}
            >
              {this.props.isChat ? (
                <AppAsideToggler
                  defaultOpen={true}
                  className="fa fa-comments"
                  display="lg"
                />
              ) : (
                <i className="fa fa-comments" aria-hidden="true" />
              )}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink
              tag={Link}
              to={"#"}
              className="nav-link"
              onClick={() => this.props.toggleNotification()}
            >
              {" "}
              {this.props.isNotification ? (
                <AppAsideToggler
                  defaultOpen={true}
                  className="fa fa-bell"
                  display="lg"
                />
              ) : (
                <i className="fa fa-bell" aria-hidden="true" />
              )}
              <Badge pill color="danger">
                9
              </Badge>
            </NavLink>
          </NavItem>
          {/* className="fa fa-th" */}
          <NavItem
            className="d-md-down-none"
            onClick={() => this.props.toggleMisc()}
          >
            {this.props.isMisc ? (
              <AppAsideToggler
                className="nav-link"
                defaultOpen={true}
                display="lg"
              />
            ) : (
              <button className="nav-link navbar-toggler">
                <span className="navbar-toggler-icon" />
              </button>
            )}
          </NavItem>

          <Profile onLogout={e => this.signOut(e)} />
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
