import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DocCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // const [details, setDetails] = useState([]);
  // const headers = {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // };
  // axios
  //   .get("http://localhost:8000/user/all", headers)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       console.log(res);
  //       // setDetails(res.data);
  //       // console.log(details);
  //     }
  //   })
  //   .catch((res) => console.log(res));
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          ENT Specialist
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}Dr. Saurabh Bhargava{bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Male, English
        </Typography>
        <Typography variant="body2" component="p">
          websitename.com
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

export default DocCard;
