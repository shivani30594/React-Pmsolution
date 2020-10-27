/* eslint-disable no-unused-vars */
import React from "react";
import routesURL from "../constant/routesURL";

const publicSwitch = (id, value = false) => (
  <div class="custom-control custom-switch switch-lg">
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
  changesList: [
    {
      change_number: 53967,
      change_name: "Fireproofing",
      type: "Design Flaw",
      assignee: [
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ],
      comments: "",
      activities_due: "AD001 AD002",
      impact_type: "Schedule",
      per_complete: "",
      public: publicSwitch("25883")
    },
    {
      change_number: 35181,
      change_name: "Earthquake reinforcement",
      type: "Material",
      assignee: [
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>,
        <a
          href="#/resourcelist/ee36cf63-b54e-4a14-8422-91b731b148b4"
          className="text-primary"
        >
          @Neeraj
        </a>
      ],
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: publicSwitch("96100", true)
    }
  ]
});

export default data;
