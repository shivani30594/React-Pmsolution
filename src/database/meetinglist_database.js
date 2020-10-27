import React from "react";

const data = props => ({
  meetingList: [
    {
      date: "04-01-19",
      meetingTitle: "Design Document Review",
      attendees: ["@Neeraj,", "@Arindam,", "@Suresh"],
      document: <i className="fa fa-file" />,
      public: "N"
    },
    {
      date: "04-02-19",
      meetingTitle: "Client Feedback Review",
      attendees: ["@Arindam,", "@Suresh"],
      document: <i className="fa fa-file" />,
      public: "N"
    }
  ]
});

export default data;
