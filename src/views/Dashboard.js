import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Card from '@material-ui/core/Card';

import { TotalPatients, TotalPractioners } from "../components/TotalPatients";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <h1>Dashboard</h1>
      <Grid containter container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <TotalPatients></TotalPatients>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalPractioners></TotalPractioners>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalPatients></TotalPatients>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
