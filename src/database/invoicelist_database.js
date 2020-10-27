/* eslint-disable no-unused-vars */
import React from "react";

const data = props => ({
  invoiceList: [
    {
      invoice_number: (
        <a href="#/invoicewiki" className="text-primary">
          1004
        </a>
      ),
      customer: "SHELL",
      currency: "USD",
      amount: "20,000.00",
      date: "05-01-19",
      status: "Unapproved",
      payment_terms: "NET 60",
      due_date: "06-30-19",
      payment_date: "",
      payment: "",
      type: "Draft Invoice",
      comments: "SP To review",
      public: "N"
    }
  ]
});

export default data;
