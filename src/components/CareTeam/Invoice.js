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
    patient_id: 0,
    invoice_details: "",
    org_id: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patient_id: details.patient_id,
      org_id: details.org_id,
      invoice_details: details.invoice_details,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("http://localhost:8000/invoice/add", data, headers)
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
      patient_id: 0,
      invoice_details: "",
      org_id: 0,
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
        <h1>Enter Invoice Details</h1>
        <br></br>
        <Grid container>
          <Grid item xs={4}>
            <InputField
              name="patient_id"
              label="Patient ID"
              value={details.patient_id}
              onChange={handleInputChange}
            ></InputField>
          </Grid>
          <Grid item xs={4}>
            <InputField
              name="org_id"
              label="Organtisation ID"
              value={details.org_id}
              onChange={handleInputChange}
            ></InputField>
          </Grid>
          <Grid item xs={4}>
            <InputField
              name="invoice_details"
              label="Description"
              value={details.invoice_details}
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
