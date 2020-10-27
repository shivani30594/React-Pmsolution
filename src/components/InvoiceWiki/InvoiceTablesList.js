import React, { Component } from "react";
import ReactDataTableNew from "../ReactDataTableNew";

const invoiceListData = {
  columns: [
    {
      label: "Invoice Number",
      field: "invoice_number",
      sort: "asc"
    },
    {
      label: "Customer",
      field: "customer",
      sort: "asc"
    },
    {
      label: "Currency",
      field: "currency",
      sort: "asc"
    },
    {
      label: "Amount",
      field: "amount",
      sort: "asc"
    },
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "Payment Terms",
      field: "payment_terms",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "Payment Date",
      field: "payment_date",
      sort: "asc"
    },
    {
      label: "Payment",
      field: "payment",
      sort: "asc"
    },
    {
      label: "Type",
      field: "type",
      sort: "asc"
    },
    {
      label: "Comments",
      field: "comments",
      sort: "asc"
    },
    {
      label: "Public",
      field: "public",
      sort: "asc"
    }
  ],
  rows: []
};
class InvoiceTablesList extends Component {
  state = {
    data: { ...invoiceListData }
  };
  componentDidMount() {
    invoiceListData.rows = this.props.invoiceList;
    this.setState({ data: { ...invoiceListData } });
  }
  render() {
    return (
      <React.Fragment>
        <ReactDataTableNew data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default InvoiceTablesList;
