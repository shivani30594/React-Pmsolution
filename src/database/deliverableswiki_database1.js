import React from "react";
import { Link } from "react-router-dom";
import { routesURL } from "../constant/routesURL";

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
  activities: [
    {
      description: "NULL",
      assigned_to: "NULL",
      start_date: "NULL",
      due_date: "NULL",
      status: "NULL",
      per_complete: "NULL"
    }
  ],
  activityLog: [
    {
      date: "06-13-19 8:15 PM",
      by: "Neeraj Garg",
      comment: "Digital and Printed Draft Exhibit for Potential Conversion"
    },
    {
      date: "06-13-19 8:14 PM",
      by: "Arindam Mukherjee",
      comment: "Digital and Printed Draft of cart path modifications"
    }
  ],
  deliverablesList: [
    {
      d_id: "46188ebb-3e76-434e-8641-5951e194bf96",
      number: (
        <Link
          className="text-primary"
          to={
            routesURL.DELIVERABLES_WIKI + "46188ebb-3e76-434e-8641-5951e194bf96"
          }
        >
          D2
        </Link>
      ),
      name: "Design.Code.01(01-May-2019)",
      due_date: "12-09-2019",
      completed: "0%",
      status: "In Progress",
      workpackage: "MODELING(1.03)",
      planEffort: "240",
      actualEffort: "0",
      value: "USD 30,000.00",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      severity: "High",
      type: "Drawing",
      description:
        "Updated digital and printed draft for cart path modifications",
      d_status: "Overdue",
      public: publicSwitch("45183")
    },
    {
      d_id: "6a6065b9-e308-46c0-a42c-650b58488dad",
      number: (
        <Link
          className="text-primary"
          to={
            routesURL.DELIVERABLES_WIKI + "6a6065b9-e308-46c0-a42c-650b58488dad"
          }
        >
          D1
        </Link>
      ),
      name: "Design.Code.01(01-May-2019)",
      due_date: "12-09-2019",
      completed: "0%",
      status: "In Progress",
      workpackage: "MODELING(1.03)",
      planEffort: "240",
      actualEffort: "0",
      value: "USD 30,000.00",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      severity: "High",
      type: "Drawing",
      description:
        "Updated digital and printed draft for cart path modifications",
      d_status: "Upcoming",
      public: publicSwitch("69421")
    },
    {
      d_id: "4ccd5179-dce4-4cf1-8af4-562aa16774a3",
      number: (
        <Link
          className="text-primary"
          to={
            routesURL.DELIVERABLES_WIKI + "4ccd5179-dce4-4cf1-8af4-562aa16774a3"
          }
        >
          D3
        </Link>
      ),
      name: "Design 2.0",
      due_date: "12-09-2019",
      completed: "0%",
      status: "In Progress",
      workpackage: "MODELING(1.03)",
      planEffort: "240",
      actualEffort: "0",
      value: "USD 30,000.00",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      severity: "High",
      type: "Drawing",
      description:
        "Updated digital and printed draft for cart path modifications",
      d_status: "Not Started",
      public: publicSwitch("4679")
    },
    {
      d_id: "1b81c733-2621-4388-8f2a-a029653ec9d2",
      number: (
        <Link
          className="text-primary"
          to={
            routesURL.DELIVERABLES_WIKI + "1b81c733-2621-4388-8f2a-a029653ec9d2"
          }
        >
          D4
        </Link>
      ),
      name: "Digital and Printed Draft of cart path modifications",
      due_date: "12-09-2019",
      completed: "0%",
      status: "In Progress",
      workpackage: "MODELING(1.03)",
      planEffort: "240",
      actualEffort: "0",
      value: "USD 30,000.00",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      severity: "High",
      type: "Drawing",
      description:
        "Updated digital and printed draft for cart path modifications",
      d_status: "Overdue",
      public: publicSwitch("50348")
    }
  ]
});

export default data;
