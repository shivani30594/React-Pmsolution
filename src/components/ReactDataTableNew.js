import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";

class ReactDataTableNew extends Component {
  render() {
    const {
      entries = 3,
      entriesOptions = [3, 10, 20, 50, 100],
      isButton = false,
      paging = true,
      searching = true
    } = this.props;
    return (
      <React.Fragment>
        {isButton && <React.Fragment />}
        <MDBDataTable
          striped
          hover
          responsive
          responsiveSm
          responsiveMd
          responsiveLg
          responsiveXl
          data={this.props.data}
          entriesOptions={entriesOptions}
          entries={entries}
          paging={paging}
          searching={searching}
        />
      </React.Fragment>
    );
  }
}

export default ReactDataTableNew;
