import React from "react";
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
import { useForm, Form } from "../Controls/useForm";
import InputField from "../Controls/InputControl";
import RadioControl from "../Controls/RadioGroup";
import DatePicker from "../Controls/DatePicker";
import SelectControl from "../Controls/SelectControl";
import CheckBoxControl from "../Controls/CheckBoxControl";
import * as departments from "../services/departments";
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
const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
  dob: new Date(),
  gender: "male",
  phno: "",
  email: "",
  department: "",
  isPermanent: "false",
  //
};
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const AddDoctor = (props) => {
  const { handleClose, open } = props;
  const classes = useStyles();
  const validate = () => {
    let temp = {};
    temp.firstName = values.firstName ? "" : "This field is required.";
    temp.lastName = values.lastName ? "" : "This field is required.";
    temp.phno = values.phno.length > 9 ? "" : "Minimum 10 numbers required";
    temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email not valid";
    temp.department =
      values.department.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };
  const { values, handleInputChange, errors, setErrors } =
    useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("testing");
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
              Reset
            </Button>
          </Toolbar>
        </AppBar>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <InputField
                name="firstName"
                label="FirstName"
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              ></InputField>
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="LastName"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Age"
                name="age"
                value={values.age}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                label="Date of birth"
                name="dob"
                value={values.dob}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Phone Number"
                name="phno"
                value={values.phno}
                onChange={handleInputChange}
                error={errors.phno}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <RadioControl
                row
                label="Gender"
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              ></RadioControl>
            </Grid>
            <Grid item xs={6}>
              <SelectControl
                label="Department"
                name="department"
                value={values.department}
                onChange={handleInputChange}
                options={departments.DepartmentID()}
                error={errors.department}
              />
            </Grid>
            <Grid item xs={6}>
              <CheckBoxControl
                label="Permanent"
                name="isPermanent"
                value={values.isPermanent}
                onChange={handleInputChange}
              />
            </Grid>
            <Button
              classes={{ root: classes.root, label: classes.label }}
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              //   text="Submit"
            >
              Submit
            </Button>
          </Grid>
        </Form>
      </Dialog>
    </div>
  );
};

export default AddDoctor;
