/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import{ AppHeaderDropdown } from "@coreui/react";
import img1 from "../../assets/img/avatars/6.jpg";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};
class ProfileAside extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <AppHeaderDropdown direction="down">
        <DropdownToggle nav>
          <img
            src={img1}
            className="img-avatar"
            alt="admin@bootstrapmaster.com"
          />
        </DropdownToggle>
        <DropdownMenu right style={{ right: "auto" }}>
          <DropdownItem header tag="div" className="text-center">
            <strong>Account</strong>
          </DropdownItem>

          <DropdownItem>
            <i className="fa fa-user" /> Profile
          </DropdownItem>

          <DropdownItem>
            <i className="fa fa-wrench" /> Settings
          </DropdownItem>

          <DropdownItem onClick={e => this.props.onLogout(e)}>
            <i className="fa fa-lock" /> Logout
          </DropdownItem>
        </DropdownMenu>
      </AppHeaderDropdown>
    );
  }
}
ProfileAside.propTypes = propTypes;
ProfileAside.defaultProps = defaultProps;
export default ProfileAside;
