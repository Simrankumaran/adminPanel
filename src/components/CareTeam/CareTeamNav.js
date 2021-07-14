import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  linkto: {
    textDecoration: "none",
    color: "#0F0F0F",
  },
});

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <List>
        <Link to="/CareTeam/Clinical" className={classes.linkto}>
          <ListItem button key="Clinical">
            <ListItemIcon>
              <DashboardIcon></DashboardIcon>
            </ListItemIcon>
            <ListItemText primary="Clinical" />
          </ListItem>
        </Link>
        <Link to="/CareTeam/Finance" className={classes.linkto}>
          <ListItem button key="Finance">
            <ListItemIcon>
              <LocalHospitalIcon></LocalHospitalIcon>
            </ListItemIcon>
            <ListItemText primary="Finance" />
          </ListItem>
        </Link>
        <Link to="/CareTeam/Appointments" className={classes.linkto}>
          <ListItem button key="Appointments">
            <ListItemIcon>
              <PeopleIcon></PeopleIcon>
            </ListItemIcon>
            <ListItemText primary="Appointments" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/CareTeam/Profile" className={classes.linkto}>
          <ListItem button key="Profile">
            <ListItemIcon>
              <EmailIcon></EmailIcon>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link to="/Report" className={classes.linkto}>
          <ListItem button key="Report">
            <ListItemIcon>
              <InfoIcon></InfoIcon>{" "}
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
        </Link>
        <Link to="/Logout" className={classes.linkto}>
          <ListItem button key="LOGOUT">
            <ListItemIcon>
              <ExitToAppIcon></ExitToAppIcon>
            </ListItemIcon>
            <ListItemText primary="LOGOUT" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Nav;