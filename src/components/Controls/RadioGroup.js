import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2),
  },
}));

export default function RadioControl(props) {
  const { name, value, label, onChange, items } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.root} component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        label={label}
        name={name}
        value={value.gender}
        onChange={onChange}
      >
        {items.map((item, index) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
