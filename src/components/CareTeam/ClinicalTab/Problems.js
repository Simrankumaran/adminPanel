import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";
import InputField from "../../Controls/InputControl";
import SelectControl from "../../Controls/CTSelectControl";
import * as body_site from "../../../JSONFILES/Problems/body_site";
import * as category from "../../../JSONFILES/Problems/category";
import * as clinical_status from "../../../JSONFILES/Problems/clinical_status";
import * as reaction_severity from "../../../JSONFILES/Problems/reaction_severity";
import * as severity from "../../../JSONFILES/Problems/severity";
import * as code from "../../../JSONFILES/Problems/code";
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

const Problems = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    patient_id: 0,
    body_site: "",
    category: "",
    clinical_status: "",
    code: "",
    reaction_severity: "",
    severity: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patient_id: details.patient_id,
      body_site: details.body_site,
      category: details.category,
      clinical_status: details.clinical_status,
      code: details.code,
      reaction_severity: details.reaction_severity,
      severity: details.severity,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("https://cehr.herokuapp.com/problem/add", data, headers)
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
      body_site: "",
      category: "",
      clinical_status: "",
      code: "",
      reaction_severity: "",
      severity: "",
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
            label="Body Site"
            name="body_site"
            value={details.body_site}
            autocomplete
            onChange={handleInputChange}
            options={body_site.BodySites()}
          />
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
            label="Status"
            name="clinical_status"
            value={details.clinical_status}
            autocomplete
            onChange={handleInputChange}
            options={clinical_status.Status()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="Code"
            name="code"
            value={details.code}
            autocomplete
            onChange={handleInputChange}
            options={code.ProblemCode()}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectControl
            label="Reaction Severity"
            name="reaction_severity"
            value={details.reaction_severity}
            autocomplete
            onChange={handleInputChange}
            options={reaction_severity.Reaction()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="Severity"
            name="severity"
            value={details.severity}
            autocomplete
            onChange={handleInputChange}
            options={severity.Severity()}
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

export default Problems;
