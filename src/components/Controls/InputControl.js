import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: theme.spacing(1),
  },
}));

export default function InputField(props) {
  const { name, label, error = null, value, onChange } = props;
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}
