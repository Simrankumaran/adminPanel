import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return (
            
        <div>
            <div>
          <List>
            <Link to="/">
            <ListItem button key="Dashboard">
                  <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
                  <ListItemText primary="Dashboard" />
            </ListItem>
            </Link>            
            <Link to="/Doctor">
                <ListItem button key="Doctor">
                    <ListItemIcon><LocalHospitalIcon></LocalHospitalIcon></ListItemIcon>
                    <ListItemText primary="Doctor" />
                </ListItem>
            </Link>
            <Link to="/Patient">
            <ListItem button key="Patient">
                  <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                  <ListItemText primary="Patient" />
            </ListItem>
            </Link>
            <Link >
            <ListItem button key="Organization">
                  <ListItemIcon><GroupWorkIcon></GroupWorkIcon></ListItemIcon>
                  <ListItemText primary="Organization" />
            </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
              <Link>
            <ListItem button key="ALL MAIL">
                  <ListItemIcon><EmailIcon></EmailIcon></ListItemIcon>
                  <ListItemText primary="ALL MAIL" />
            </ListItem>
              </Link>
              <Link>
            <ListItem button key="ABOUT">
                  <ListItemIcon><InfoIcon></InfoIcon> </ListItemIcon>
                  <ListItemText primary="ABOUT" />
            </ListItem>
              </Link>
            <Link>
            <ListItem button key="LOGOUT">
                  <ListItemIcon><ExitToAppIcon></ExitToAppIcon></ListItemIcon>
                  <ListItemText primary="LOGOUT" />
            </ListItem>    
            </Link>      
          </List>
        </div>
        </div>
    )
}

export default Nav;