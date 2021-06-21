import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import {
  TotalPatients,
  TotalPractioners,
  Visits,
  Earning,
} from "../components/Num1";
// import Map from "../components/Map";
import PatList from "../components/PatList";
import { Chart1, Chart2 } from "../components/Charts";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  patlist: {
    minWidth: "100%",
    minHeight: 400,
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <div>
        <h1>Dashboard</h1>
      </div>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <TotalPatients></TotalPatients>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalPractioners></TotalPractioners>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Visits></Visits>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Earning></Earning>
        </Grid>
        <Grid className={classes.patlist} item xs={12} sm={6} md={3}>
          <h2>Hospital Survey</h2>
          <Chart1></Chart1>
        </Grid>
        <Grid className={classes.patlist} item xs={12} sm={6} md={3}>
          <h2>New Patients</h2>
          <Chart2></Chart2>
          <PatList></PatList>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item>{/* <Map></Map> */}</Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
