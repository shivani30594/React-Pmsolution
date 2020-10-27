import React from "react";
import { routesURL } from "../constant/routesURL";
import { Link } from "react-router-dom";

const publicSwitch = (id, value = false) => (
  <div class="custom-control custom-switch switch-lg ">
    <input
      type="checkbox"
      class="custom-control-input"
      id={`switch-${id}`}
      defaultChecked={value}
    />
    <label class="custom-control-label" for={`switch-${id}`} />
  </div>
);

const data = {
  record_information: {
    workflow_info: [
      {
        title: "Status",
        value: "In Approval"
      },
      {
        title: "Last Approved By",
        value: "Neeraj Garg"
      },
      {
        title: "Next Approver",
        value: "Arindam"
      },
      {
        title: "Due Date",
        value: "06-12-19"
      },
      {
        title: "Last Approval Date",
        value: "05-10-19"
      }
    ],
    audit_info: [
      {
        title: "Created By",
        value: "Suresh Padmanabhan"
      },
      {
        title: "Creation Date",
        value: "12-15-18"
      },
      {
        title: "Last Updated By",
        value: "Suresh Padmanabhan"
      },
      {
        title: "Last Updated Date",
        value: "06-10-19"
      },
      {
        title: "Latest Activity date",
        value: "06-08-19"
      },
      {
        title: "Locked By",
        value: "Suresh Padmanabhan"
      }
    ]
  },
  changes: [
    {
      c_id: "9dc9ce25-45ca-40d6-b30f-15084b1f5daa",
      number: (
        <Link
          className="text-primary"
          to={routesURL.CHANGE_WIKI + "9dc9ce25-45ca-40d6-b30f-15084b1f5daa"}
        >
          C2
        </Link>
      ),
      name: "Change1",
      title: "Path modification design",
      due_date: "09-30-19",
      complete: "100%",
      status: "Pending",
      change_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      value: "USD 30,000.00",
      planned_effort: "30",
      actual_effort: "30",
      owner: "Arindam",
      impact_type: "Design",
      severity: "Medium",
      days: "25",
      description:
        "Model missing cart path modification. Efforts and impact needs to be restimated and Change Order raised with client",
      public: publicSwitch("8685", true)
    },
    {
      c_id: "2454b41e-a40a-4b18-91b5-af9e7bd03a7f",
      number: (
        <Link
          className="text-primary"
          to={routesURL.CHANGE_WIKI + "2454b41e-a40a-4b18-91b5-af9e7bd03a7f"}
        >
          C1
        </Link>
      ),
      name: "Change4",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Pending",
      change_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      value: "USD 30,000.00",
      planned_effort: "10",
      owner: "Suresh",
      actual_effort: "0",
      impact_type: "Schedule",
      severity: "Medium",
      days: "25",
      description:
        "Model missing cart path modification. Efforts and impact needs to be restimated and Change Order raised with client",
      public: publicSwitch("51334")
    },
    {
      c_id: "a9c48cfc-dbda-41d0-b9ec-ad6d374cd317",
      number: (
        <Link
          className="text-primary"
          to={routesURL.CHANGE_WIKI + "a9c48cfc-dbda-41d0-b9ec-ad6d374cd317"}
        >
          C3
        </Link>
      ),
      name: "Change 400",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Approved",
      change_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      value: "USD 30,000.00",
      planned_effort: "10",
      owner: "Neeraj",
      actual_effort: "0",
      impact_type: "Budget",
      severity: "Medium",
      days: "25",
      description:
        "Model missing cart path modification. Efforts and impact needs to be restimated and Change Order raised with client",
      public: publicSwitch("39344")
    },
    {
      c_id: "1ba8accd-c8a7-4bf8-81e2-d9b610f1f8cb",
      number: (
        <Link
          className="text-primary"
          to={routesURL.CHANGE_WIKI + "1ba8accd-c8a7-4bf8-81e2-d9b610f1f8cb"}
        >
          C5
        </Link>
      ),
      name: "Change 19",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Approved",
      change_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      value: "USD 30,000.00",
      planned_effort: "10",
      owner: "Arindam",
      actual_effort: "0",
      impact_type: "Invoice",
      severity: "Medium",
      days: "35",
      description:
        "Model missing cart path modification. Efforts and impact needs to be restimated and Change Order raised with client",
      public: publicSwitch("5567")
    },
    {
      c_id: "1c752317-002a-4916-9a20-a94e3c474281",
      number: (
        <Link
          className="text-primary"
          to={routesURL.CHANGE_WIKI + "1c752317-002a-4916-9a20-a94e3c474281"}
        >
          C9
        </Link>
      ),
      name: "Change 220",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      change_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      value: "USD 30,000.00",
      planned_effort: "10",
      owner: "Suresh",
      actual_effort: "0",
      impact_type: "Contract",
      severity: "Medium",
      days: "35",
      description:
        "Model missing cart path modification. Efforts and impact needs to be restimated and Change Order raised with client",
      public: publicSwitch("21473")
    },
    {
      c_id: "c19e3a3c-eede-4c65-a696-17564d838062",
      number: (
        <Link
          className="text-primary"
          to={routesURL.CHANGE_WIKI + "c19e3a3c-eede-4c65-a696-17564d838062"}
        >
          C12
        </Link>
      ),
      name: "change9100",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      change_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      value: "USD 30,000.00",
      planned_effort: "10",
      owner: "Arindam",
      actual_effort: "0",
      impact_type: "Design",
      severity: "Medium",
      days: "65",
      description:
        "Model missing cart path modification. Efforts and impact needs to be restimated and Change Order raised with client",
      public: publicSwitch("75838")
    }
  ]
};

export default data;
