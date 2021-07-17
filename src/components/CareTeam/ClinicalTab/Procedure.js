import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";
import InputField from "../../Controls/InputControl";
import SelectControl from "../../Controls/CTSelectControl";
import * as category from "../../../JSONFILES/Procedure/category";
import * as follow_up from "../../../JSONFILES/Procedure/follow_up";
import * as complication from "../../../JSONFILES/Procedure/complication";
import * as outcome from "../../../JSONFILES/Procedure/outcome";
import * as reason_code from "../../../JSONFILES/Procedure/reason_code";
import * as status from "../../../JSONFILES/Procedure/status";
import * as status_reason from "../../../JSONFILES/Procedure/status_reason";
import * as used_code from "../../../JSONFILES/Procedure/used_code";

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
const Procedure = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    category: "",
    complication: "",
    follow_up: "",
    outcome: "",
    reason_code: "",
    status: "",
    status_reason: "",
    used_code: "",
    practitioner_id: 0,
    patient_id: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patient_id: details.patient_id,
      category: details.category,
      complication: details.complication,
      follow_up: details.follow_up,
      outcome: details.outcome,
      reason_code: details.reason_code,
      status: details.status,
      status_reason: details.status_reason,
      used_code: details.used_code,
      practitioner_id: details.practitioner_id,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("http://localhost:8000/allergy/add", data, headers)
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
      category: "",
      complication: "",
      follow_up: "",
      outcome: "",
      reason_code: "",
      status: "",
      status_reason: "",
      used_code: "",
      practitioner_id: 0,
      patient_id: 0,
    });
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  return (
    <form className={classes.form} autoComplete="on" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <InputField
            name="patient_id"
            label="Patient ID"
            value={details.patient_id}
            onChange={handleInputChange}
          ></InputField>
        </Grid>
        <Grid item xs={6}>
          <InputField
            name="practitioner_id"
            label="Practitioner ID"
            value={details.practitioner_id}
            onChange={handleInputChange}
          ></InputField>
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="Category"
            name="category"
            value={details.category}
            autocomplete
            onChange={handleInputChange}
            options={category.Categories()}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="complication"
            name="complication"
            value={details.complication}
            autocomplete
            onChange={handleInputChange}
            options={complication.ProcComplication()}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="Follow Up"
            name="follow_up"
            value={details.follow_up}
            autocomplete
            onChange={handleInputChange}
            options={follow_up.FollowUp()}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="Procedure Outcome"
            name="outcome"
            value={details.outcome}
            autocomplete
            onChange={handleInputChange}
            options={outcome.ProcOutcome()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="Reason Code"
            name="reason_code"
            value={details.reason_code}
            autocomplete
            onChange={handleInputChange}
            options={reason_code.ProcReasonCode()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="status"
            name="status"
            value={details.status}
            autocomplete
            onChange={handleInputChange}
            options={status.ProcStatus()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="status_reason"
            name="status_reason"
            value={details.status_reason}
            autocomplete
            onChange={handleInputChange}
            options={status_reason.ProcStatusReason()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="used_code"
            name="used_code"
            value={details.used_code}
            autocomplete
            onChange={handleInputChange}
            options={used_code.ProcUsedCode()}
          />
        </Grid>

        <Grid item xs={6}>
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
  );
};

export default Procedure;
