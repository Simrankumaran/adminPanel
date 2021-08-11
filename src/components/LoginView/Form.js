import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { useAppContext } from "../../libs/contextLib";
// import { UserContext } from "../../libs/userContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

function Form({ handleClose }) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userId);
    // console.log(password);

    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    // console.log(formdata);
    axios
      .post("https://cehr.herokuapp.com/auth/token", formdata, headers)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // console.log(res.data.entity_type);
          // const admindata = res.data;
          switch (res.data.entity_type) {
            case "Careteam":
              history.push({
                pathname: "/CareTeam/Clinical",
                state: res.data,
              });
              break;
            case "Admin":
              history.push({
                pathname: "/Admin/Dashboard",
                state: res.data,
              });
              break;
            default:
              history.push("/");
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          variant="filled"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          name="password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
