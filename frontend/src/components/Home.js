import React, { Suspense, useEffect } from "react";
import Navigation from "./NavBar/Navigation";
import { Redirect, Route, Switch, useLocation } from "react-router";
import routes from "../utils/routes";
import { getHomeRoute, SaveHomeRoute } from "../utils/HomeRoutes";
import CustomProgressBar from "./ProgressBar/CustomProgressBar";
import SimpleBackdrop from "../widgets/SimpleBackDrop";
import { changeMenu, ControlMenu } from "../utils/ControlMenu";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    if (location && location.pathname != "/home") {
      SaveHomeRoute(location.pathname);
    }
  }, [location]);
}

/** Authenticated user home page */
export default function Home() {
  usePageViews();

  let lastRoute = getHomeRoute();

  useEffect(() => {
    ControlMenu();

    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 1200) {
        changeMenu("vertical");
      }
    });
  }, []);

  const switchRoutes = (
    <Suspense fallback={<SimpleBackdrop open={true} />}>
      <Switch>
        {routes.map((prop, key) => {
          if (prop.layout === "/home") {
            return (
              <Route
                exact
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
          return null;
        })}

        {lastRoute ? (
          <Redirect from="/home" to={lastRoute} />
        ) : (
          <Redirect from="/home" to="/home/dashboard" />
        )}
      </Switch>
    </Suspense>
  );
  return (
    <div>
      <Navigation />
      <div id="home_wrapper" className="wrapper">
        <div id="home_container" className="container-fluid">
          <CustomProgressBar />
          {switchRoutes}
        </div>
      </div>
    </div>
  );
}
