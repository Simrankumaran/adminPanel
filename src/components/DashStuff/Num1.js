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
      .get("http://localhost:8000/patient/all/", headers)
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

const HospitalBeds = () => {
  const [totalBeds, setTotalBeds] = useState({
    value: [],
  });
  const [avail, setAvail] = useState({
    num: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get("http://localhost:8000/analytics/stats/beds/" + 1, headers)
      .then((res) => {
        if (res.status === 200) {
          setAvail({ num: res.data });
        }
      })
      .catch();

    axios
      .get("http://localhost:8000/orgs/" + 1, headers)
      .then((res) => {
        if (res.status === 200) {
          setTotalBeds({ value: res.data });
        }
      })
      .catch();
  }, []);
  return (
    <div>
      <Card style={{ backgroundColor: "#FAFCC2" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            {totalBeds.value - avail.num}
          </Typography>
          <Typography variant="h5" component="h2">
            Beds Available
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Visits = () => {
  return (
    <div>
      <Card style={{ backgroundColor: "#FAFCC2" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            50
          </Typography>
          <Typography variant="h5" component="h2">
            No. of visits today
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Earning = () => {
  const [docdata, setDocdata] = useState({
    totE: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(
        "http://localhost:8000/analytics/stats/hospital/earning/" + 1,
        headers
      )
      .then((res) => {
        if (res.status === 200) {
          setDocdata({ totE: res.data });
          console.log("HOSPITAL EARNING BY ORG");
          console.log(docdata.totE);
        }
      })
      .catch();
  }, []);
  return (
    <div>
      <Card style={{ backgroundColor: "#FAFCC2" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            $
          </Typography>
          <Typography variant="h5" component="h2">
            Hospital Earning
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export { TotalPatients, HospitalBeds, Visits, Earning };
