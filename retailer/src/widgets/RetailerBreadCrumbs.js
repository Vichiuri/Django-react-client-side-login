import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function RetailerBreadCrumbs(props) {
  const classes = useStyles();

  const { propsName, toProp, prevPropsName } = props;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <RouteLink
        to="/"
        style={{ color: "grey", textDecoration: "none", fontSize: "14px" }}
        className={classes.link}
      >
        Home
      </RouteLink>
      <RouteLink
        to={toProp}
        style={{ color: "grey", textDecoration: "none", fontSize: "14px" }}
        className="side_nav_item"
      >
        <span>{prevPropsName}</span>
      </RouteLink>
      <Typography
        style={{ color: "grey", textDecoration: "none", fontSize: "14px" }}
        className="side_nav_item"
      >
        {propsName}
      </Typography>
    </Breadcrumbs>
  );
}
