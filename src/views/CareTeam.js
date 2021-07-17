import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Form } from "../components/Controls/useForm";
import InputField from "../components/Controls/InputControl";
import RadioControl from "../components/Controls/RadioGroup";
import SelectControl from "../components/Controls/SelectControl";
import * as departments from "../components/services/departments";
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

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const CareTeam = (props) => {
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
      department: "",
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
          // setDetails({ ...details, user_id: res.data.user_id });
          const docdata = {
            department: details.department,
            status: details.status,
            user_id: res.data.user_id,
          };
          console.log(res.data.user_id);
          console.log(details.user_id);
          console.log("THIS IS doc USER ID");
          console.log(docdata.user_id);
          console.log(res.data.user_id);
          axios
            .post("http://localhost:8000/careteam/add", docdata, headers)
            .then((res) => {
              console.log("before condition");
              if (res.status === 200) {
                console.log("CREATED CareTeam user");
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
      <Typography variant="h6" className={classes.title}>
        Enter the details
      </Typography>

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
              label="Department"
              name="department"
              value={details.department}
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
    </div>
  );
};

export default CareTeam;
