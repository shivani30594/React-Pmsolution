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

const data = props => ({
  issueList: [
    {
      i_id: "e5a84a85-30d8-406a-9c47-743e873dec94",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "e5a84a85-30d8-406a-9c47-743e873dec94"}
        >
          I2
        </Link>
      ),
      name: "issue1",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/ee36cf63-b54e-4a14-8422-91b731b148b4"
          className="text-primary"
        >
          @Neeraj
        </a>
      ),
      actual_effort: "0",
      issue_type: "Design",
      issue_severity: "Medium",
      public: publicSwitch("28205", true),
      days: "25",
      description: ""
    },
    {},
    {
      i_id: "1c5d1ee3-edc8-4dc5-97a5-d70e0aee36bb",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "1c5d1ee3-edc8-4dc5-97a5-d70e0aee36bb"}
        >
          I1
        </Link>
      ),
      name: "issue2",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      actual_effort: "0",
      issue_type: "Schedule",
      issue_severity: "Medium",
      public: publicSwitch("97846"),
      days: "25",
      description: ""
    },
    {},
    {
      i_id: "5362a855-0195-4fa7-aa15-f18c1d711bb7",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "5362a855-0195-4fa7-aa15-f18c1d711bb7"}
        >
          I3
        </Link>
      ),
      name: "issue3",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      actual_effort: "0",
      issue_type: "Budget",
      issue_severity: "Medium",
      public: publicSwitch("3350"),
      days: "25",
      description: ""
    },
    {},
    {
      i_id: "bd88878e-1101-4ab6-a36d-beac2b684597",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "bd88878e-1101-4ab6-a36d-beac2b684597"}
        >
          I5
        </Link>
      ),
      name: "issue4",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      actual_effort: "0",
      issue_type: "Invoice",
      issue_severity: "Medium",
      public: publicSwitch("1328"),
      days: "35",
      description: ""
    },
    {
      i_id: "76acd683-7175-4c8c-98e8-d3a70886acad",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "76acd683-7175-4c8c-98e8-d3a70886acad"}
        >
          I9
        </Link>
      ),
      name: "issue9",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      actual_effort: "0",
      issue_type: "Contract",
      issue_severity: "Medium",
      public: publicSwitch("81038"),
      days: "35",
      description: ""
    },
    {},
    {
      i_id: "7239eb52-1060-429a-a1d5-66a0da2a2406",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "7239eb52-1060-429a-a1d5-66a0da2a2406"}
        >
          I12
        </Link>
      ),
      name: "issue0",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      actual_effort: "0",
      issue_type: "Design",
      issue_severity: "Medium",
      public: publicSwitch("16183", true),
      days: "65",
      description: ""
    },
    {},
    {
      i_id: "1d6aa4df-7651-487e-ac93-c07da567578d",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "1d6aa4df-7651-487e-ac93-c07da567578d"}
        >
          I6
        </Link>
      ),
      name: "issue900",
      title: "Model missing cart path modification",
      due_date: "09-30-19",
      complete: "0%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "10",
      actual_effort: "0",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      issue_type: "Contract",
      issue_severity: "Medium",
      public: publicSwitch("38554"),
      days: "65",
      description: ""
    },
    {}
  ]
});

export default data;
