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
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const initialValues = {
  id: "0",
  firstName: "",
  lastName: "",
  age: "",
  dob: new Date(),
  gender: "male",
  phno: "",
  email: "",
};
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const AddPatient = (props) => {
  const { handleClose, open } = props;
  const classes = useStyles();

  const { values, handleInputChange } = useForm(initialValues);
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
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Form>
          <Grid container>
            <Grid item xs={6}>
              <InputField
                name="firstName"
                label="FirstName"
                value={values.firstName}
                onChange={handleInputChange}
              ></InputField>
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="LastName"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
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
                label="phoneNumber"
                name="phno"
                value={values.phno}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
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
          </Grid>
        </Form>
      </Dialog>
    </div>
  );
};

export default AddPatient;
