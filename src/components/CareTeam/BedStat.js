import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";
import InputField from "../Controls/InputControl";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  gridContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
  form: {
    width: "80%",
    margin: theme.spacing(1),
  },
}));
const BedStatus = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    alloted_to: 0,
    org_ID: 1,
    // is_occupied: "True",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      alloted_to: details.alloted_to,
      org_ID: details.org_ID,
      is_occupied: "True",
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("https://cehr.herokuapp.com/beds/add", data, headers)
      .then((res) => {
        if (res.code === 200) {
          console.log(res);
          console.log("PUSHED");
        }
      })
      .catch((res) => console.log(res.response));
  };
  const formReset = (e) => {
    e.preventDefault();
    setDetails({
      alloted_to: 0,
      org_ID: 1,
    });
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  return (
    <div>
      <form className={classes.form} autoComplete="on" onSubmit={handleSubmit}>
        <h1>Enter Bed Details</h1>
        <br></br>
        <Grid container>
          <Grid item xs={12}>
            <InputField
              name="org_id"
              label="Organisation ID"
              value={details.org_ID}
              onChange={handleInputChange}
            ></InputField>
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="alloted_to"
              label="PATIENT ID"
              value={details.alloted_to}
              onChange={handleInputChange}
            ></InputField>
          </Grid>

          <Grid item xs={12}>
            <Button
              classes={{ root: classes.root, label: classes.label }}
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              disableElevation
            >
              Submit
            </Button>
            <Button
              classes={{ root: classes.root, label: classes.label }}
              variant="contained"
              size="large"
              color="primary"
              type="reset"
              onClick={formReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default BedStatus;
