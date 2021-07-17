import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";
import InputField from "../../Controls/InputControl";
import SelectControl from "../../Controls/CTSelectControl";
import * as condition_code from "../../../JSONFILES/FamilyHistory/condition_outcome";
// import * as data_absent_reason from "../../../JSONFILES/FamilyHistory/data_absent_reason";
import * as famrelationship from "../../../JSONFILES/FamilyHistory/famrelationship";
import * as famstatus from "../../../JSONFILES/FamilyHistory/famstatus";

import axios from "axios";
import RadioControl from "../../Controls/RadioGroup";

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
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const FamHis = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    patient_id: "",
    condition_code: "",
    // condition_outcome: "",
    // data_absent_reason: "",
    // reason_code: "",
    relationship: "",
    sex: "",
    status: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patient_id: details.patient_id,
      condition_code: details.condition_code,
      // condition_outcome: details.condition_outcome,
      // data_absent_reason: details.data_absent_reason,
      // reason_code: details.reason_code,
      relationship: details.relationship,
      sex: details.sex,
      status: details.status,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("http://localhost:8000/familyhistory/add", data, headers)
      .then((res) => {
        if (res.code === 200) {
          console.log(res.data);
        }
      })
      .catch((res) => console.log(res.response));
  };
  const formReset = (e) => {
    e.preventDefault();
    setDetails({
      patient_id: "",
      condition_code: "",
      // condition_outcome: "",
      data_absent_reason: "",
      // reason_code: "",
      relationship: "",
      sex: "",
      status: "",
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
          <SelectControl
            label="Condition code"
            name="condition_code"
            value={details.condition_code}
            autocomplete
            onChange={handleInputChange}
            options={condition_code.Outcome()}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="Relationship"
            name="relationship"
            value={details.relationship}
            autocomplete
            onChange={handleInputChange}
            options={famrelationship.Relationship()}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="Family status"
            name="status"
            value={details.status}
            autocomplete
            onChange={handleInputChange}
            options={famstatus.Status()}
          />
        </Grid>

        <Grid item xs={6}>
          <RadioControl
            row
            label="Gender"
            name="sex"
            value={details.sex}
            onChange={handleInputChange}
            items={genderItems}
          ></RadioControl>
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

export default FamHis;
