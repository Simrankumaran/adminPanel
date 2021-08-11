import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Card, Typography, CardContent } from "@material-ui/core";

import { TotalPatients, Earning } from "../components/DashStuff/Num1";
import { Chart1 } from "../components/DashStuff/Charts";
import Chart2 from "../components/DashStuff/DocGraph";
import Chart3 from "../components/DashStuff/CTChart";
import Chart4 from "../components/DashStuff/PatGender";
import HospitalBeds from "../components/DashStuff/AvaiableBeds";
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
  const location = useLocation();
  const { entity_id, entity_type, org_id, user_id } =
    (location && location.state) || {};
  console.log(entity_id, entity_type, org_id, user_id);
  return (
    <Box component="span" m={1}>
      <div>
        <Card className={classes.heading}>
          <CardContent>
            <Typography>DASHBOARD </Typography>
          </CardContent>
        </Card>
      </div>
      <Grid container spacing={4} className={classes.charts}>
        <Grid item xs={12} sm={6} md={4}>
          <HospitalBeds org_id={org_id}></HospitalBeds>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalPatients></TotalPatients>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Earning org_id={org_id}></Earning>
        </Grid>
        <Grid className={classes.patlist} item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>HOSPITAL ANALYTICS</Typography>
            </CardContent>
          </Card>
          <Chart1 className={classes.charts} org_id={org_id}></Chart1>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>DOCTORS PER DEPT</Typography>
            </CardContent>
          </Card>
          <Chart2 org_id={org_id}></Chart2>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>CARETEAM PER DEPT</Typography>
            </CardContent>
          </Card>
          <Chart3 org_id={org_id}></Chart3>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.heading}>
            <CardContent>
              <Typography>PATIENT DISTRIBUTION</Typography>
            </CardContent>
          </Card>
          <Chart4 org_id={org_id}></Chart4>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
