import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: theme.spacing(1),
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} autoComplete="on" {...other}>
      {props.children}
    </form>
  );
}
