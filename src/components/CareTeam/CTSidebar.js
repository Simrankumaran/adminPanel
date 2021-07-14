import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./CareTeamNav";
import Clinical from "./ClinicalTab/ClinicalTab";
import CTProfile from "./CTProfile";
import Appointments from "./Appointments";
import Finance from "./Invoice";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              HOSPITAL NAME
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <Nav></Nav>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route path="/CareTeam/Clinical" exact component={Clinical}></Route>
            <Route path="/CareTeam/Finance" component={Finance}></Route>
            <Route
              path="/CareTeam/Appointments"
              component={Appointments}
            ></Route>
            <Route path="/CareTeam/Profile" component={CTProfile}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
