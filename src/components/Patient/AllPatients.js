import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

import PatCard from "./PatCard";
import AddPatient from "./AddPatient";

const useStyles = makeStyles((theme) => ({
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
}));

const AllPatients = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [allpatients, setAllpatients] = useState({
    alldetails: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get("https://cehr.herokuapp.com/orgs/patients/" + 1, headers)
      .then((res) => {
        if (res.status === 200) {
          setAllpatients({ alldetails: res.data });
        }
      })
      .catch((res) => console.log(res));
  }, []);
  console.log(allpatients.alldetails);
  return (
    <div>
      <h1>All Patients</h1>
      <div>
        <Fab
          className={classes.addicon}
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <AddPatient handleClose={handleClose} open={open}></AddPatient>
      </div>
      <Grid container spacing={4} className={classes.gridContainer}>
        {allpatients.alldetails.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <PatCard
              key={item.user_details.user_id}
              docID={item.user_details.user_id}
              fullname={item.user_details.username}
              email={item.user_details.email}
              phno={item.user_details.phone}
              address={item.user_details.address}
              bloodgroup={item.user_details.blood_group}
            ></PatCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllPatients;
