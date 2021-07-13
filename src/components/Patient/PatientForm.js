import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Form } from "../Controls/useForm";

import InputField from "../Controls/InputControl";
import RadioControl from "../Controls/RadioGroup";
import SelectControl from "../Controls/SelectControl";
import * as departments from "../services/departments";

import axios from "axios";
class PatientForm extends Component {
  state = {
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
  };
  genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];
  handleInputChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.body,
      username: this.state.username,
      secret: this.state.secret,
      phone: this.state.phone,
      email: this.state.email,
      entity_type: this.state.entity_type,
      aadhar: this.state.aadhar,
      org_id: this.state.org_id,
      fullname: this.state.fullname,
      address: this.state.address,
      dob: this.state.dob,
      blood_group: this.state.blood_group,
      gender: this.state.gender,
      password: this.state.password,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  formReset = (e) => {
    e.preventDefault();
    // e.target.reset();
  };
  render(props) {
    const classes = props;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <InputField
                name="username"
                label="Username"
                value={this.state.username}
                onChange={this.handleInputChange}
              ></InputField>
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Secret"
                name="secret"
                value={this.state.secret}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Phone Number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectControl
                label="Department"
                name="entity_type"
                value={this.state.entity_type}
                onChange={this.handleInputChange}
                options={departments.DepartmentID()}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Aadhar"
                name="aadhar"
                value={this.state.aadhar}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Organisation"
                name="org_id"
                value={this.state.org_id}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Fullname"
                name="fullname"
                value={this.state.fullname}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Date of birth"
                name="dob"
                value={this.state.dob}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Blood group"
                name="blood_group"
                value={this.state.blood_group}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Secret"
                name="secret"
                value={this.state.secret}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <RadioControl
                row
                label="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.handleInputChange}
                items={this.genderItems}
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
                onClick={this.formReset}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    );
  }
}

export default PatientForm;
