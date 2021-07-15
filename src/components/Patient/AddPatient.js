import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { Form } from "../Controls/useForm";
import InputField from "../Controls/InputControl";
import RadioControl from "../Controls/RadioGroup";
import SelectControl from "../Controls/SelectControl";
import * as departments from "../services/departments";
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
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const AddPatient = (props) => {
  const { handleClose, open } = props;
  const classes = useStyles();
  const [details, setDetails] = useState({
    username: "",
    secret: "",
    phone: "",
    email: "",
    entity_type: "",
    aadhar: "",
    org_id: "",
    fullname: "",
    address: "",
    dob: "",
    blood_group: "",
    gender: "",
    password: "",
    status: "Active",
    department: "",
    martial_status: "",
    communication_language: "",
    contact_relationship: "",
    contact_name: "",
    contact_number: "",
    bloodgroup: "",
    user_id: 0,
  });

  const formReset = (e) => {
    e.preventDefault();
    setDetails({
      username: "",
      secret: "",
      phone: "",
      email: "",
      entity_type: "",
      aadhar: "",
      org_id: 1,
      fullname: "",
      address: "",
      dob: "",
      blood_group: "",
      gender: "",
      password: "",
      status: "Active",
      martial_status: "",
      communication_language: "",
      contact_relationship: "",
      contact_name: "",
      contact_number: "",
      bloodgroup: "",
      user_id: 0,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      username: details.username,
      secret: details.secret,
      phone: details.phone,
      email: details.email,
      entity_type: details.entity_type,
      aadhar: details.aadhar,
      org_id: details.org_id,
      fullname: details.fullname,
      address: details.address,
      dob: details.dob,
      blood_group: details.blood_group,
      gender: details.gender,
      password: details.password,
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(userdata);
    axios
      .post("http://localhost:8000/user/add", userdata, headers)
      .then((res) => {
        if (res.status === 200) {
          setDetails({ user_id: res.data.user_id });
          const patdata = {
            martial_status: details.martial_status,
            communication_language: details.communication_language,
            contact_relationship: details.contact_relationship,
            contact_name: details.contact_name,
            contact_number: details.contact_number,
            bloodgroup: details.bloodgroup,
            status: details.status,
            user_id: res.data.user_id,
          };
          // console.log(res.data.user_id);
          console.log(details.user_id);
          console.log("THIS IS patient USER ID");
          // console.log(patdata.user_id);
          console.log(res.data.user_id);
          axios
            .post("http://localhost:8000/patient/add", patdata, headers)
            .then((res) => {
              console.log("before condition");
              if (res.status === 200) {
                console.log("CREATED A PATIENT");
              }
            });
        }
      })
      .catch((res) => console.log(res.response));
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Enter patient details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <InputField
                name="username"
                label="Username"
                value={details.username}
                onChange={handleInputChange}
              ></InputField>
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Secret"
                name="secret"
                value={details.secret}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Phone Number"
                name="phone"
                value={details.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Email"
                name="email"
                value={details.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectControl
                label="Entity Type"
                name="entity_type"
                value={details.entity_type}
                defaultValue={""}
                onChange={handleInputChange}
                options={departments.DepartmentID()}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Aadhar"
                name="aadhar"
                value={details.aadhar}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Organisation"
                name="org_id"
                value={details.org_id}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Fullname"
                name="fullname"
                value={details.fullname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Address"
                name="address"
                value={details.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Date of birth"
                name="dob"
                value={details.dob}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Blood group"
                name="blood_group"
                value={details.blood_group}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Password"
                name="password"
                value={details.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Status"
                name="status"
                value={details.status}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Martial Status"
                name="martial_status"
                value={details.martial_status}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Communication Language"
                name="communication_language"
                value={details.communication_language}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Contact Relationship"
                name="contact_relationship"
                value={details.contact_relationship}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Contact Name"
                name="contact_name"
                value={details.contact_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Contact Number"
                name="contact_number"
                value={details.contact_number}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Bloodgroup"
                name="bloodgroup"
                value={details.bloodgroup}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <RadioControl
                row
                label="Gender"
                name="gender"
                value={details.gender}
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
        </Form>
      </Dialog>
    </div>
  );
};

export default AddPatient;
