import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Card, Typography, CardContent } from "@material-ui/core";

import {
  TotalPatients,
  HospitalBeds,
  Visits,
  Earning,
} from "../components/DashStuff/Num1";
import { Chart1 } from "../components/DashStuff/Charts";
import Chart2 from "../components/DashStuff/DocGraph";
import Chart3 from "../components/DashStuff/CTChart";
import Chart4 from "../components/DashStuff/PatGender";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  heading: {
    fontSize: "large",
    fontWeight: "bold",
    padding: 5,
    marginBottom: "10px",
    textAlign: "center",
    backgroundColor: "#CCF6C8",
    color: "black",
  },
  charts: {
    //chart1
    marginTop: "10px",
    marginBottom: "10px",
  },
  patlist: {
    minWidth: "100%",
    minHeight: 400,
    padding: 20,
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <div>
        <Card className={classes.heading}>
          <CardContent>
            <Typography>DASHBOARD</Typography>
          </CardContent>
        </Card>
      </div>
      <Grid container spacing={4} className={classes.charts}>
        <Grid item xs={12} sm={6} md={3}>
          <HospitalBeds></HospitalBeds>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalPatients></TotalPatients>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Visits></Visits>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Earning></Earning>
        </Grid>
        <Grid className={classes.patlist} item xs={12} sm={6} md={3}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>HOSPITAL ANALYTICS</Typography>
            </CardContent>
          </Card>
          <Chart1 className={classes.charts}></Chart1>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>DOCTORS PER DEPT</Typography>
            </CardContent>
          </Card>
          <Chart2></Chart2>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>CARETEAM PER DEPT</Typography>
            </CardContent>
          </Card>
          <Chart3></Chart3>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>PATIENT DISTRIBUTION</Typography>
            </CardContent>
          </Card>
          <Chart4></Chart4>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
