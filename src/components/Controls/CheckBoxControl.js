import React from "react";
import {
  makeStyles,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: theme.spacing(1),
  },
}));

export default function CheckboxControl(props) {
  const { name, label, value, onChange } = props;
  const classes = useStyles();
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            className={classes.root}
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
