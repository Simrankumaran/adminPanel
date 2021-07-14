import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    "& > *": {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  profilepic: {
    margin: 10,
    width: 150,
    height: 150,
  },
  heading: {
    width: "95%",
    height: 200,
    margin: 30,
    padding: 20,
    border: "1px solid blue",
  },
  adminname: {
    fontSize: "40px",
    fontWeight: "bold italics",
    textAlign: "center",
    margin: 50,
  },
  body: {
    width: "95%",
    height: 350,
    margin: 30,
    padding: 40,
    border: "1px solid blue",
  },
}));
const Details = {
  Name: "Miss Aadhya",
  Email: "Aadhya@abc.com",
  Phno: "987654545",
  Address:
    "39 - A, Mumbadevi Silver Market, Mumbadevi Temple, Mumbadevi Road, Kalbadevi",
  City: "Bangalore",
  State: "Karnataka",
  ZipCode: "560000",
  Country: "India",
  Password: "**********",
};
const CTProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.heading}>
        <Grid container spacing={6}>
          {" "}
          <Grid item>
            <Avatar src="../../Pic2.jpg" className={classes.profilepic} />
          </Grid>
          <Grid item>
            <Typography className={classes.adminname}>
              {Details.Name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper variant="outlined" className={classes.body}>
        <Grid container spacing={6}>
          {" "}
          <Grid item xs={12} sm={6}>
            <Typography>EMAIL-{Details.Email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>PHNO-{Details.Phno}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>ADDRESS-{Details.Address}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>CITY-{Details.City}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>STATE-{Details.State}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>ZIPCODE-{Details.ZipCode}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>COUNTRY-{Details.Country}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>PASSWORD-{Details.Password}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default CTProfile;
