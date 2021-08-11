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
const Invoice = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    org_id: "",
    date: "",
    amount: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      org_id: details.org_id,
      date: details.date,
      amount: details.amount,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("https://cehr.herokuapp.com/earning/add", data, headers)
      .then((res) => {
        if (res.code === 200) {
          console.log(res);
        }
      })
      .catch((res) => console.log(res.response));
  };
  const formReset = (e) => {
    e.preventDefault();
    setDetails({
      org_id: "",
      date: "",
      amount: "",
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
        <h1>Enter Earning Details</h1>
        <br></br>
        <Grid container>
          <Grid item xs={4}>
            <InputField
              name="org_id"
              label="Organisation ID"
              value={details.org_id}
              onChange={handleInputChange}
            ></InputField>
          </Grid>
          <Grid item xs={4}>
            <InputField
              name="date"
              label="dd/mm/yyyy"
              value={details.date}
              onChange={handleInputChange}
            ></InputField>
          </Grid>
          <Grid item xs={4}>
            <InputField
              name="amount"
              label="Amount"
              value={details.amount}
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
export default Invoice;
