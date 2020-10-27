import React from "react";
import { Input, NavLink } from "reactstrap";
import Modal from "../../helper/Modal";
import ProjectForm from "../../components/Forms/ProjectForm";
import { routesURL } from "../../constant/routesURL";

class Popup extends React.Component {
  state = {
    isModal: false,
    active: ""
  };

  toggle = () => {
    this.setState({ isModal: !this.state.isModal, active: "" });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ active: value });
  };
  onSubmit = () => {
    const randomNumber = Math.floor(Math.random() * 1000000) + 6000000;
    window.location.hash = `${routesURL.PROJECT_WIKI}` + randomNumber;
  };
  render() {
    const { active } = this.state;

    const options = {
      project: {
        name: "Project",
        Component: <ProjectForm onSubmit={this.onSubmit} toggle={this.toggle} />
      },
      activities: { name: "Activities", Component: "" },
      deliverables: { name: "Deliverables", Component: "" },
      issues: { name: "Issues", Component: "" },
      change: { name: "Change", Component: "" }
    };

    const modelHeader = (
      <Input
        type="select"
        className="custom-select"
        onChange={this.handleChange}
        value={active}
      >
        <option value="" disabled>
          -- Select --
        </option>
        {Object.keys(options).map(opt => (
          <option value={opt}>{options[opt]["name"]}</option>
        ))}
      </Input>
    );

    const modalBody = options.hasOwnProperty(active)
      ? options[active]["Component"]
      : "";

    return (
      <React.Fragment>
        <NavLink onClick={this.toggle}>
          <i className="fa fa-plus-circle" aria-hidden="true" />
        </NavLink>
        <Modal
          isOpen={this.state.isModal}
          toggle={this.toggle}
          header={modelHeader}
          body={modalBody}
          size={active === "project" ? "xl" : "md"}
        />
      </React.Fragment>
    );
  }
}

export default Popup;
