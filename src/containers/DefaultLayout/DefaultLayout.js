/* eslint-disable no-unused-vars */
import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { AppAside, AppFooter, AppHeader } from "@coreui/react";
// routes config
import routes from "../../routes";
import { routesURL } from "../../constant/routesURL";
import CalendarAside from "./CalendarAside";
import MiscAside from "./MiscAside";
import NewsFeedAside from "./NewsFeedAside";

// const DefaultAside = React.lazy(() => import("./DefaultAside"));

const ChatAside = React.lazy(() => import("./ChatAside"));
const NotificationAside = React.lazy(() => import("./NotificationAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  initialState = {
    isChat: false,
    isNotification: false,
    isCalendar: false,
    isMisc: false,
    isNewsFeed: false,
    visible: false
  };

  state = { ...this.initialState };

  toggle = toggle => {
    this.setState({
      ...this.initialState,
      [`is${toggle}`]: !this.state[`is${toggle}`]
    });
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    const {
      isChat,
      isCalendar,
      isMisc,
      isNewsFeed,
      isNotification,
      visible
    } = this.state;
    const path = this.props.location.pathname;
    const currentpath = "/" + path.split("/")[1];

    let title = "";
    routes.forEach(route => {
      const newpath = route.path.split("/:id")[0];
      if (currentpath === newpath) {
        title = route.title;
        return true;
      }
    });
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader
              title={title}
              toggleChat={() => this.toggle("Chat")}
              toggleNotification={() => this.toggle("Notification")}
              toggleCalendar={() => this.toggle("Calendar")}
              toggleMisc={() => this.toggle("Misc")}
              toggleNewsFeed={() => this.toggle("NewsFeed")}
              isChat={isChat}
              isNotification={isNotification}
              isCalendar={isCalendar}
              isMisc={isMisc}
              isNewsFeed={isNewsFeed}
            />
          </Suspense>
        </AppHeader>
        <div
          className="app-body"
          style={{ overflowY: "scroll", maxHeight: "calc(100vh - 95px)" }}
        >
          <main className="main">
            <Container fluid className="position-relative">
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to={routesURL.DASHBOARD} />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              {isChat && <ChatAside />}
              {isCalendar && <CalendarAside />}
              {isMisc && <MiscAside />}
              {isNewsFeed && <NewsFeedAside />}
              {isNotification && (
                <NotificationAside
                  toggleNotification={() => this.toggle("Notification")}
                />
              )}
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
