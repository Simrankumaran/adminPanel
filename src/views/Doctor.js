import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  addicon: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const SimpleCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          ENT Specialist
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}Dr. Saurabh Bhargava{bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Male, English
        </Typography>
        <Typography variant="body2" component="p">
          websitename.com
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};
const Doctor = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>All Doctors</h1>
      <div>
        <Fab
          className={classes.addicon}
          color="primary"
          aria-label="add"
          onClick={this.handleToggle}
        >
          <AddIcon />
        </Fab>
      </div>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard></SimpleCard>
        </Grid>
      </Grid>
    </div>
  );
};
export default Doctor;
