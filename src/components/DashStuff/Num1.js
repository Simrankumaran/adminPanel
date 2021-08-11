import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const TotalPatients = () => {
  const [docdata, setDocdata] = useState({
    totP: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get("https://cehr.herokuapp.com/patient/all/", headers)
      .then((res) => {
        if (res.status === 200) {
          setDocdata({ totP: res.data });
        }
      })
      .catch();
  }, []);
  return (
    <div>
      <Card style={{ backgroundColor: "#FAFCC2" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            {docdata.totP.length}
          </Typography>
          <Typography variant="h5" component="h2">
            Total Patients
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Earning = (props) => {
  const org_id = props.org_id;
  // console.log("org id from earning comp  " + org_id);
  const [totalearning, setTotalearning] = useState({
    data: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(
        "https://cehr.herokuapp.com/analytics/stats/hospital/earning/" + org_id,
        headers
      )
      .then((res) => {
        if (res.status === 200) {
          setTotalearning({
            data: res.data,
          });
        }
      })
      .catch();
  }, []);
  // console.log(totalearning.data);
  var amt = 0;
  for (var i in totalearning.data) {
    amt = amt + Number(totalearning.data[i].amount);
  }
  // console.log(amt);
  return (
    <div>
      <Card style={{ backgroundColor: "#FAFCC2" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Rs.{amt}
          </Typography>
          <Typography variant="h5" component="h2">
            Hospital Earning
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export { TotalPatients, Earning };
