import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Form } from "../../Controls/useForm";

import { Button } from "@material-ui/core";
import InputField from "../../Controls/InputControl";
import SelectControl from "../../Controls/CTSelectControl";
import * as category from "../../../JSONFILES/Allergy/category";
import * as reaction_substance from "../../../JSONFILES/Allergy/reaction_substance";
import * as reaction_manifestation from "../../../JSONFILES/Allergy/reaction_manifestation";
import * as reaction_exposure_route from "../../../JSONFILES/Allergy/reaction_exposure_route";
import * as clinicalstatus from "../../../JSONFILES/Allergy/clinicalstatus";
import * as allergycriticality from "../../../JSONFILES/Allergy/allergycriticality";

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
const Allergy = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    patient_id: 0,
    category: "",
    clinical_status: "",
    criticality: "",
    reaction_exposure_route: "",
    reaction_manifestation: "",
    reaction_substance: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patient_id: details.patient_id,
      category: details.category,
      clinical_status: details.clinical_status,
      criticality: details.criticality,
      reaction_exposure_route: details.reaction_exposure_route,
      reaction_manifestation: details.reaction_manifestation,
      reaction_substance: details.reaction_substance,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("https://cehr.herokuapp.com/allergy/add", data, headers)
      .then((res) => {
        if (res.code === 200) {
          console.log(res.data.allergy_id);
        }
      })
      .catch((res) => console.log(res.response));
  };
  const formReset = (e) => {
    e.preventDefault();
    setDetails({
      patient_id: "",
      category: "",
      clinical_status: "",
      criticality: "",
      reaction_exposure_route: "",
      reaction_manifestation: "",
      reaction_substance: "",
    });
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  return (
    <div>
      <Form className={classes.form} autoComplete="on" onSubmit={handleSubmit}>
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
              label="Clinical Status"
              name="clinical_status"
              value={details.clinical_status}
              autocomplete
              onChange={handleInputChange}
              options={clinicalstatus.Status()}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectControl
              label="Criticality"
              name="criticality"
              value={details.criticality}
              autocomplete
              onChange={handleInputChange}
              options={allergycriticality.Criticality()}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectControl
              label="Exposure Route"
              name="reaction_exposure_route"
              value={details.reaction_exposure_route}
              autocomplete
              onChange={handleInputChange}
              options={reaction_exposure_route.exposure_route()}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectControl
              label="Manifestation"
              name="reaction_manifestation"
              value={details.reaction_manifestation}
              autocomplete
              onChange={handleInputChange}
              options={reaction_manifestation.Manifestation()}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectControl
              label="Reaction Substance"
              name="reaction_substance"
              value={details.reaction_substance}
              autocomplete
              onChange={handleInputChange}
              options={reaction_substance.Substance()}
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
      </Form>
    </div>
  );
};

export default Allergy;
