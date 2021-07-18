import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
}));

const PatCard = ({ fullname, email, phno, address, bloodgroup }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Blood Group : {bloodgroup}
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}
          {fullname}
          {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <hr></hr>
          Email : {email}
          <br></br>
          Contact Number : {phno}
        </Typography>
        <Typography variant="body2" component="p">
          ADDRESS : {address}
          <br />
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions> */}
    </Card>
  );
};

export default PatCard;
