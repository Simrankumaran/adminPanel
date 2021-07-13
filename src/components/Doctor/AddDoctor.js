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
const AddDoctor = (props) => {
  const { handleClose, open } = props;
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [entity_type, setEntityType] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [org_id, setOrgId] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [blood_group, setBloodgroup] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  //const [status,setStatus]=useState("active");
  //const [department,setDepartment]=usestate("");

  const formReset = (e) => {
    e.preventDefault();
    // setUsername.value = "";
    // setSecret.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      secret: secret,
      phone: phone,
      email: email,
      entity_type: entity_type,
      aadhar: aadhar,
      org_id: org_id,
      fullname: fullname,
      address: address,
      dob: dob,
      blood_group: blood_group,
      gender: gender,
      password: password,
      //status:status,
      //department:department,
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:8000/user/add", data, headers)
      .then((res) => console.log(res))
      .catch((res) => console.log(res.response));
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
              Enter doctor details
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></InputField>
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Secret"
                name="secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectControl
                label="Department"
                name="entity_type"
                value={entity_type}
                onChange={(e) => setEntityType(e.target.value)}
                options={departments.DepartmentID()}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Aadhar"
                name="aadhar"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Organisation"
                name="org_id"
                value={org_id}
                onChange={(e) => setOrgId(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Date of birth"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Blood group"
                name="blood_group"
                value={blood_group}
                onChange={(e) => setBloodgroup(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <RadioControl
                row
                label="Gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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

export default AddDoctor;
