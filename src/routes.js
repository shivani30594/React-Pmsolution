import React from "react";
import { routesURL } from "./constant/routesURL";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));
const ProjectStatusReport = React.lazy(() =>
  import("./views/ProjectStatusReport/ProjectStatusReport.js")
);
const ProjectWiki = React.lazy(() => import("./views/ProjectWiki/ProjectWiki"));

const DeliverablesWiki = React.lazy(() =>
  import("./views/DeliverablesWiki/DeliverablesWiki")
);
const WorkPackageWiki = React.lazy(() =>
  import("./views/WorkPackageWiki/WorkPackageWiki")
);
const WorkPackageList = React.lazy(() =>
  import("./views/WorkPackageWiki/WorkPackageList")
);
const TaskWiki = React.lazy(() => import("./views/TaskWiki/TaskWiki"));
const Meeting = React.lazy(() => import("./views/Meetings/Meeting"));


const MettingList = React.lazy(() => import("./views/Meetings/MettingList"));
const ActivitiesList = React.lazy(() =>
  import("./views/Activities/ActivitiesList")
);
const IssueList = React.lazy(() => import("./views/IssueWiki/IssueList"));
const IssueWiki = React.lazy(() => import("./views/IssueWiki/IssueWiki"));
const ChangesList = React.lazy(() => import("./views/ChangeWiki/ChangesList"));
const ChangeWiki = React.lazy(() => import("./views/ChangeWiki/ChangeWiki"));
const InvoiceWiki = React.lazy(() => import("./views/InvoiceWiki/InvoiceWiki"));
const InvoiceList = React.lazy(() => import("./views/InvoiceWiki/InvoiceList"));
const RiskWiki = React.lazy(() => import("./views/RisksWiki/RiskWiki"));
const RiskList = React.lazy(() => import("./views/RisksWiki/RiskList"));
const WBS = React.lazy(() => import("./views/WBS/WBS"));
const ResourcesList = React.lazy(() =>
  import("./views/ProjectWiki/ResourcesList")
);
const DeliverablesList = React.lazy(() =>
  import("./views/DeliverablesWiki/DeliverablesList")
);

const routes = [
  { path: "/", exact: true, name: "Home", title: "Home" },
  {
    path: routesURL.DASHBOARD,
    component: Dashboard,
    title: "Project Dashboard"
  },
  {
    path: `${routesURL.PSR}:id`,
    component: ProjectStatusReport,
    title: "Project Status Report",
    exact: true
  },
  {
    path: `${routesURL.PROJECT_WIKI}:id`,
    component: ProjectWiki,
    title: "Project Wiki",
    exact: true
  },
  {
    path: `${routesURL.DELIVERABLES_WIKI}:id`,
    component: DeliverablesWiki,
    title: "Deliverables Wiki"
  },
  {
    path: routesURL.DELIVERABLES_LIST,
    component: DeliverablesList,
    title: "Deliverables Register"
  },
  {
    path: `${routesURL.WORKPACKAGE_WIKI}:id`,
    component: WorkPackageWiki,
    title: "WorkPackage Wiki"
  },
  {
    path: `${routesURL.WORKPACKAGE_LIST}`,
    component: WorkPackageList,
    title: "WorkPackage Register"
  },
  {
    path: routesURL.TASK_WIKI,
    component: TaskWiki,
    title: "Task Wiki"
  },
  {
    path: routesURL.MEETING,
    component: Meeting,
    title: "Meetings Home"
  },
  {
    path: routesURL.MEETING_LIST,
    component: MettingList,
    title: "Meetings Register"
  },
  {
    path: `${routesURL.ISSUE_WIKI}:id`,
    component: IssueWiki,
    title: "Issue Home"
  },
  {
    path: routesURL.ISSUE_LIST,
    component: IssueList,
    title: "Issue Register"
  },
  {
    path: `${routesURL.CHANGE_WIKI}:id`,
    component: ChangeWiki,
    title: "Change Home"
  },
  {
    path: routesURL.CHANGES_LIST,
    component: ChangesList,
    title: "Changes Register"
  },
  {
    path: `${routesURL.INVOICE_WIKI}`,
    component: InvoiceWiki,
    title: "Invoice Home"
  },
  {
    path: `${routesURL.INVOICE_LIST}`,
    component: InvoiceList,
    title: "Invoice Register"
  },
  {
    path: `${routesURL.WBS}`,
    component: WBS,
    title: "WBS Home"
  },
  {
    path: `${routesURL.RISK_WIKI}`,
    component: RiskWiki,
    title: "Risk Home"
  },
  {
    path: `${routesURL.RISK_LIST}`,
    component: RiskList,
    title: "Risk List"
  },
  {
    path: routesURL.ACTIVITIES_LIST,
    component: ActivitiesList,
    title: "Activities Register"
  },
  {
    path: `${routesURL.RESOURCE_LIST}:id`,
    component: ResourcesList,
    title: "Resource Allocation"
  }
];

export default routes;
