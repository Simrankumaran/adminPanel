import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
  details: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    width: "80%",
    // "& MuiTypography-body1": {
    //   padding: theme.spacing(5),
    //   color: "red",
    // },
  },
}));
const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid items>
          <Avatar src="./Pic3.jpg" className={classes.bigAvatar} />
        </Grid>
        <Grid items className={classes.details}>
          <Paper elevation={3}>
            <Typography>Name</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Email</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Contact Number</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Adress</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>City</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>State</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Zip Code</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Country</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Password</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Profile;
/*
<Paper elevation={3}>
            <Typography>Email</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Contact Number</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Adress</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>City</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>State</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Zip Code</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Country</Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography>Password</Typography>
          </Paper> */
