import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";
import InputField from "../Controls/InputControl";
import SelectControl from "../Controls/CTSelectControl";
import * as appointment_type from "../../JSONFILES/Appointment/appointment_type";
import * as participant_type from "../../JSONFILES/Appointment/participant_type";
import * as reason_code from "../../JSONFILES/Appointment/reason_code";
import * as status from "../../JSONFILES/Appointment/status";
import * as specialty from "../../JSONFILES/Appointment/specialty";

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
const Appointments = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    appointment_type: "",
    practitioner_id: 0,
    patient_id: 0,
    participant_type: "",
    reason_code: "",
    specialty: "",
    status: "",
    date: new Date(),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patient_id: details.patient_id,
      practitioner_id: details.practitioner_id,
      appointment_type: details.appointment_type,
      participant_type: details.participant_type,
      reason_code: details.reason_code,
      status: details.status,
      specialty: details.specialty,
      date: details.date,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    axios
      .post("https://cehr.herokuapp.com/appointment/add", data, headers)
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
      appointment_type: "",
      practitioner_id: 0,
      patient_id: 0,
      participant_type: "",
      reason_code: "",
      specialty: "",
      status: "",
      date: "",
    });
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  return (
    <form className={classes.form} autoComplete="on" onSubmit={handleSubmit}>
      <h1>Enter Appointment Details</h1>
      <br></br>
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
            label="Appointment Type"
            name="appointment_type"
            value={details.appointment_type}
            autocomplete
            onChange={handleInputChange}
            options={appointment_type.AppType()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="Participant Type"
            name="participant_type"
            value={details.participant_type}
            autocomplete
            onChange={handleInputChange}
            options={participant_type.PType()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="reason code"
            name="reason_code"
            value={details.reason_code}
            autocomplete
            onChange={handleInputChange}
            options={reason_code.Reason()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="specialty"
            name="specialty"
            value={details.specialty}
            autocomplete
            onChange={handleInputChange}
            options={specialty.Speciality()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            label="status"
            name="status"
            value={details.status}
            autocomplete
            onChange={handleInputChange}
            options={status.Status()}
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

export default Appointments;
