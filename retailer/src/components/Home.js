import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import SimpleBackdrop from "../../../frontend/src/widgets/SimpleBackDrop";
import retailerRoutes from "../utils/RetailerRoutes";
import Navigation from "./NavBar/Navigation";
import Footer from "./Footer/Footer";
import { connect } from "react-redux";
import { uploadRetailerLocation } from "../redux/Actions/RetailerAuth";

/** Authenticated user entry point */
function Home(props) {
  //console.log(props);
  var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;
    const { account } = props?.auth;
    const dist_id = account?.default_distributor?.id;

    props.uploadRetailerLocation({
      latitude: crd.latitude,
      longitude: crd.longitude,
      distributor_id: dist_id,
    });
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    try {
      if (navigator && navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(success);
            } else if (result.state === "prompt") {
              console.log(result.state);
              navigator.geolocation.getCurrentPosition(
                success,
                errors,
                options
              );
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const switchRoutes = (
    <Suspense fallback={<SimpleBackdrop open={true} />}>
      <Switch>
        {retailerRoutes.map((prop, key) => {
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

        <Redirect from="/home" to="/home/dashboard" />
      </Switch>
    </Suspense>
  );
  return (
    <div class="page-wrapper lazyload-image">
      <Navigation />
      <div
        style={{
          minHeight: "80vh",
        }}
      >
        {switchRoutes}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});
export default connect(mapStateToProps, { uploadRetailerLocation })(Home);
