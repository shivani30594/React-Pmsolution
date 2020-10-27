import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Redirect } from "react-router-dom";

class ReactDataTable extends Component {
  render() {
    const {
      data,
      columns,
      loading = false,
      pageSize = 10,
      minRows = 10,
      paginationDown = true
    } = this.props;
    return (
      <React.Fragment>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          showPageJump={true}
          columns={columns}
          defaultPageSize={pageSize}
          className="-striped -highlight text-center"
          minRows={minRows}
          loading={loading}
          getTrProps={(state, rowInfo, column, instance) => {
            return this.props.handleClick
              ? {
                  onClick: () => this.props.handleClick(rowInfo)
                }
              : {};
          }}
          showPaginationBottom={paginationDown}
        />
      </React.Fragment>
    );
  }
}

export default ReactDataTable;
