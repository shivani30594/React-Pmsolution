import React from "react";
import { Table } from "reactstrap";

const InvoiceFinancialTableList = props => {
  return (
    <React.Fragment>
      <Table responsive>
        <tr>
          <td className="basicinfo text-left">
            <div>Contract Value</div>
          </td>
          <td className="text-left">
            <div>NULL</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>Change Orders</div>
          </td>
          <td className="text-left">
            <div>NULL</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>Total Billed</div>
          </td>
          <td className="text-left">
            <div>NULL</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>Total Paid</div>
          </td>
          <td className="text-left">
            <div>NULL</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>Total Cost</div>
          </td>
          <td className="text-left">
            <div>NULL</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>Backlog</div>
          </td>
          <td className="text-left">
            <div>NULL</div>
          </td>
        </tr>
      </Table>
    </React.Fragment>
  );
};

export default InvoiceFinancialTableList;
