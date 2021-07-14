import React from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: theme.spacing(1),
  },
}));

export default function SelectControl(props) {
  const { name, label, value, onChange, options } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.root} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.Display} value={item.Display}>
            {item.Display}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
