import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import DocCard from "./DocCard";
import AddDoctor from "./AddDoctor";

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
const AllDoctors = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>All Doctors</h1>
      <div>
        <Fab
          className={classes.addicon}
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <AddDoctor handleClose={handleClose} open={open}></AddDoctor>
      </div>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DocCard></DocCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllDoctors;
