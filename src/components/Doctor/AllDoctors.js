import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
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

  const [alldoctors, setAlldoctors] = useState({
    alldetails: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get("https://cehr.herokuapp.com/orgs/practitioners/" + 1, headers)
      .then((res) => {
        if (res.status === 200) {
          setAlldoctors({ alldetails: res.data });
        }
      })
      .catch((res) => console.log(res));
  }, []);
  console.log(alldoctors.alldetails);
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
        {alldoctors.alldetails.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <DocCard
              key={item.user_details.user_id}
              docID={item.user_details.user_id}
              dept={item.Practitioner.department}
              fullname={item.user_details.username}
              email={item.user_details.email}
              phno={item.user_details.phone}
              address={item.user_details.address}
            ></DocCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllDoctors;
